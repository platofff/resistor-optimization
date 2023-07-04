#include <algorithm>
#include <numeric>
#include <sstream>
#include <tuple>
#include <cassert>

#include "SeriesContainer.hpp"

double SeriesContainer::getResistance() const {
  const auto resistance = elements | std::views::transform([](const auto& x) {
                            return x->getResistance();
                          });
  return std::reduce(resistance.begin(), resistance.end(), 0.0);
}

std::shared_ptr<ElementContainer> SeriesContainer::createNewInstance() const {
  return std::make_shared<SeriesContainer>();
}

std::shared_ptr<ElementContainer> SeriesContainer::_shared_from_this() {
  return shared_from_this();
}

std::weak_ptr<ElementContainer> SeriesContainer::_weak_from_this() {
  return weak_from_this();
}

std::tuple<double, double> SeriesContainer::calculateDimensions(
    const std::vector<SVGElement>& svg_elements) const {
  const auto height_view =
      svg_elements |
      std::views::transform([](const auto& x) { return x.getHeight(); });
  const auto height = std::ranges::max(height_view);

  const auto width_view =
      svg_elements |
      std::views::transform([](const auto& x) { return x.getWidth(); });
  const auto width = std::reduce(width_view.begin(), width_view.end(), 0.0);

  return std::make_tuple(width, height);
}

SVGElement SeriesContainer::toSVG() const {
  std::ostringstream ss;

  auto svg_elements = getSVGElements();
  assert(svg_elements.size() != 0);
  const auto [width, height] = calculateDimensions(svg_elements);

  auto real_height = height;
  auto offset_x = 0.0;

  for (auto& el : svg_elements) {
    const auto center_v = (el.getHeight() / 2.0 - el.getLeftEndY());
    real_height = std::max(real_height, el.getHeight() + center_v);
    el.setOffsetY((height - el.getHeight()) / 2.0 + center_v);
    el.setOffsetX(offset_x);
    offset_x += el.getWidth();

    ss << el;
  }

  const auto left_end_y = svg_elements.front().getLeftEndY() +
                          svg_elements.front().getOffsetY();
  const auto right_end_y =
      svg_elements.back().getRightEndY() + svg_elements.back().getOffsetY();

  return SVGElement(ss.str(), width, real_height, left_end_y, right_end_y);
}
