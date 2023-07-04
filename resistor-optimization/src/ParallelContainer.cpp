#include <cmath>
#include <numeric>
#include <algorithm>
#include <cassert>

#include "ParallelContainer.hpp"

double ParallelContainer::getResistance() const {
  const auto inv_resistance =
      elements | std::views::transform(
                     [](const auto& x) { return 1.0 / x->getResistance(); });
  const auto inv =
      std::reduce(inv_resistance.begin(), inv_resistance.end(), 0.0);
  const auto res = 1.0 / inv;

  if (!std::isnormal(res)) {
    return 0.0;
  }
  return res;
}

std::tuple<double, double> ParallelContainer::calculateDimensions(
    const std::vector<SVGElement>& svg_elements) const {
  const auto height_view =
      svg_elements |
      std::views::transform([](const auto& x) { return x.getHeight(); });
  const auto height = std::reduce(height_view.begin(), height_view.end(), 0.0);

  const auto width_view =
      svg_elements |
      std::views::transform([](const auto& x) { return x.getWidth(); });
  const auto width = std::ranges::max(width_view);

  return std::make_tuple(width, height);
}

std::shared_ptr<ElementContainer> ParallelContainer::createNewInstance() const {
  return std::make_shared<ParallelContainer>();
}

std::shared_ptr<ElementContainer> ParallelContainer::_shared_from_this() {
  return shared_from_this();
}

std::weak_ptr<ElementContainer> ParallelContainer::_weak_from_this() {
  return weak_from_this();
}

void ParallelContainer::extendConnectors(
    std::vector<SVGElement>& svg_elements,
    const double offset_x,
    const double width,
    std::ostream& os) const {
  double offset_y = 0.0;

  for (auto& el : svg_elements) {
    el.setOffsetX((width - el.getWidth()) / 2.0);

    // SVG lines for each element
    os << "<line x1=\"" << offset_x << "\" y1=\""
       << offset_y + el.getLeftEndY() << "\" x2=\""
       << el.getOffsetX() + offset_x << "\" y2=\""
       << offset_y + el.getLeftEndY() << "\" stroke=\"black\" />"

       << "<line x1=\"" << width - el.getOffsetX() + offset_x << "\" y1=\""
       << offset_y + el.getRightEndY() << "\" x2=\"" << width + offset_x
       << "\" y2=\"" << offset_y + el.getRightEndY()
       << "\" stroke=\"black\" />";

    // Vertical offset for stacking elements
    el.setOffsetY(offset_y);
    offset_y += el.getHeight();
  }
}

std::tuple<double, double, double, double, double, double>
ParallelContainer::calculateLinePostions(
    const std::vector<SVGElement>& svg_elements,
    const double height) const {
  assert(svg_elements.size() != 0);

  double l1_start_y = svg_elements[0].getLeftEndY();
  double l1_end_y = height - svg_elements.back().getLeftEndY();
  double l1_middle_y = (l1_start_y + l1_end_y) / 2.0;

  double l2_start_y = svg_elements[0].getRightEndY();
  double l2_end_y = height - svg_elements.back().getRightEndY();
  double l2_middle_y = (l2_start_y + l2_end_y) / 2.0;

  return {l1_start_y, l1_end_y, l1_middle_y, l2_start_y, l2_end_y, l2_middle_y};
}

void ParallelContainer::elementsSVG(
    std::vector<SVGElement>& svg_elements,
    const double offset_x,
    const double width,
    const double l1_start_y,
    const double l1_end_y,
    const double l1_middle_y,
    const double l2_start_y,
    const double l2_end_y,
    const double l2_middle_y,
    std::ostream& os) const {
  for (auto& x : svg_elements) {
    x.setOffsetX(x.getOffsetX() + offset_x);
    os << x;
  }

  // Vertical lines
  os << "<line x1=\"" << offset_x << "\" y1=\"" << l1_start_y << "\" x2=\""
     << offset_x << "\" y2=\"" << l1_end_y << "\" stroke=\"black\" />";

  os << "<line x1=\"" << width + offset_x << "\" y1=\"" << l2_start_y
     << "\" x2=\"" << width + offset_x << "\" y2=\"" << l2_end_y
     << "\" stroke=\"black\" />";

  // Horizontal lines
  os << "<line x1=\"0\" y1=\"" << l1_middle_y << "\" x2=\"" << offset_x
     << "\" y2=\"" << l1_middle_y << "\" stroke=\"black\" />";

  os << "<line x1=\"" << width + offset_x << "\" y1=\"" << l2_middle_y
     << "\" x2=\"" << width + 2 * offset_x << "\" y2=\"" << l2_middle_y
     << "\" stroke=\"black\" />";
}

SVGElement ParallelContainer::toSVG() const {
  std::ostringstream ss;

  auto svg_elements = getSVGElements();
  auto [width, height] = calculateDimensions(svg_elements);
  const auto offset_x = 25.0;

  extendConnectors(svg_elements, offset_x, width, ss);
  const auto [l1_start_y, l1_end_y, l1_middle_y, l2_start_y, l2_end_y,
              l2_middle_y] = calculateLinePostions(svg_elements, height);
  elementsSVG(svg_elements, offset_x, width, l1_start_y, l1_end_y,
                   l1_middle_y, l2_start_y, l2_end_y, l2_middle_y, ss);
  width += offset_x * 2.0;

  return SVGElement(ss.str(), width, height, l1_middle_y, l2_middle_y);
}
