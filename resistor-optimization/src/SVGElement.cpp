#include <SVGElement.hpp>
#include <ostream>

SVGElement::SVGElement(std::string code,
                       double width,
                       double height,
                       double left_end_y,
                       double right_end_y)
    : code(std::move(code)),
      width(width),
      height(height),
      left_end_y(left_end_y),
      right_end_y(right_end_y) {}

std::ostream& operator<<(std::ostream& os, const SVGElement& el) {
  os << "<g transform=\"translate(" << el.offset_x << "," << el.offset_y
     << ")\">" << el.code << "</g>";
  return os;
}

double SVGElement::getHeight() const {
  return height;
}
double SVGElement::getWidth() const {
  return width;
}
double SVGElement::getLeftEndY() const {
  return left_end_y;
}
double SVGElement::getRightEndY() const {
  return right_end_y;
}
double SVGElement::getOffsetX() const {
  return offset_x;
}
double SVGElement::getOffsetY() const {
  return offset_y;
}

void SVGElement::setOffsetX(double offset_x) {
  this->offset_x = offset_x;
}
void SVGElement::setOffsetY(double offset_y) {
  this->offset_y = offset_y;
}