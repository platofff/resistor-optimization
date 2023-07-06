#include <ranges>
#include <cassert>

#include "ParallelContainer.hpp"
#include "ResistanceOptimizer.hpp"
#include "SeriesContainer.hpp"
#include "combinations_with_replacement.hpp"

ResistanceOptimizer::ResistanceOptimizer(std::vector<double> &resistances) {
  const auto resistors_view = resistances | std::views::transform([](const auto& x) {
                return std::make_shared<Resistor>(x);
              });
  std::ranges::copy(resistors_view.begin(), resistors_view.end(), std::back_inserter(resistors));
}

std::generator<std::shared_ptr<ElementContainer>>
ResistanceOptimizer::generateCombinations(
    const std::vector<const std::shared_ptr<Resistor>>::iterator begin,
    const std::vector<const std::shared_ptr<Resistor>>::iterator end,
    const std::shared_ptr<ElementContainer> base) const {
  assert(std::distance(begin, end) != 0);
  
  const auto c = std::ranges::subrange(begin, end);

  if (base == nullptr) {
    const auto base1 = std::make_shared<SeriesContainer>();
    for (const auto& res : generateCombinations(
             begin, end, base1)) {
      co_yield res;
    }
    const auto base2 = std::make_shared<ParallelContainer>();
    for (const auto& res : generateCombinations(
             begin, end, base2)) {
      co_yield res;
    }
    co_return;
  }

  if (c.size() == 1) {
    for (const auto& container : base->allNestedContainers()) {
      co_yield container->addCoW(c[0]);
    }
    co_return;
  }

  for (const auto& container : base->allNestedContainers()) {
    for (const auto& res : generateCombinations(
             std::next(begin), end, container->addCoW(c[0]))) {
        co_yield res;
    }

    auto scont = std::dynamic_pointer_cast<SeriesContainer>(container);

    if (scont) {
      const auto new_pcont = std::make_shared<ParallelContainer>();
      new_pcont->add(c[0]);

      for (const auto& res : generateCombinations(
             std::next(begin), end, container->addCoW(new_pcont))) {
        co_yield res;
      }
    } else {
      auto pcont = std::dynamic_pointer_cast<ParallelContainer>(container);

      const auto new_scont = std::make_shared<SeriesContainer>();
      new_scont->add(c[0]);
      for (const auto& res : generateCombinations(
             std::next(begin), end, container->addCoW(new_scont))) {
        co_yield res;
      }
    }
  }
}

std::pair<std::string, double> ResistanceOptimizer::optimize(
                                   const double target_resistance,
                                   const size_t max_resistors) const {
  std::ostringstream ss;

  double min_r_offset = std::numeric_limits<double>::infinity();
  std::uint_fast32_t res_n = 0;
  double res_resistance = 0.0;
  std::shared_ptr<ElementContainer> res;

  for (const auto&& c :
       combinations_with_replacement(resistors, max_resistors)) {
    for (const auto& combination :
         generateCombinations(c.begin(), c.end(), nullptr)) {
      const double resistance = combination->getResistance();
      const double r_offset =
          std::abs(target_resistance - resistance);
      const auto n = combination->getNumberOfResistors();

      if (r_offset < min_r_offset || (n < res_n && r_offset <= ACCURACY)) {
        min_r_offset = r_offset;
        res_n = n;
        res_resistance = resistance;
        res = combination;
      }
    }
  }

  const auto res_svg = res->toSVG();

  ss << "<svg width=\"" << res_svg.getWidth() << "\" height=\""
     << res_svg.getHeight() << "\" viewBox=\"0 0 " << res_svg.getWidth()
     << " " << res_svg.getHeight()
     << "\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">"
     << "<rect width=\"" << res_svg.getWidth() << "\" height=\""
     << res_svg.getHeight() << "\" fill=\"white\"/>"
     << res_svg << "</svg>";

  return std::make_pair(ss.str(), res_resistance);
}

#if __has_include(<emscripten/bind.h>)

#include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::register_vector<double>("DoubleVector");

    emscripten::value_object<std::pair<std::string, double>>("PairStringDouble")
        .field("svg", &std::pair<std::string, double>::first)
        .field("resistance", &std::pair<std::string, double>::second);

    emscripten::class_<ResistanceOptimizer>("ResistanceOptimizer")
        .constructor<std::vector<double>&>()
        .function("optimize", &ResistanceOptimizer::optimize);
}

#endif
