#include "Resistor.hpp"
#include <format>

Resistor::Resistor(double resistance) : resistance(resistance) {}

double Resistor::getResistance() const {
  return resistance;
}

SVGElement Resistor::toSVG() const {
  std::string svg = std::format(
      "<rect width=\"100\" height=\"30\" fill=\"white\" stroke=\"black\" "
      "x=\"50\" y=\"10\"/>"
      "<line x1=\"0\" y1=\"25\" x2=\"50\" y2=\"25\" stroke=\"black\" />"
      "<line x1=\"150\" y1=\"25\" x2=\"200\" y2=\"25\" stroke=\"black\" />"
      "<text x=\"100\" y=\"30\" dominant-baseline=\"middle\" font-size=\"16\" "
      "text-anchor=\"middle\" fill=\"black\">"
      "{}"
      "</text>",
      resistance);

  return SVGElement(svg, 200.0, 50.0, 25.0, 25.0);
}
