#include "Resistor.hpp"
#include <format>

Resistor::Resistor(double resistance) : resistance(resistance) {}

double Resistor::getResistance() const {
  return resistance;
}

SVGElement Resistor::toSVG() const {
  std::string svg = std::format(
      "<rect width=\"100\" height=\"30\" fill=\"white\" stroke=\"black\" "
      "x=\"25\" y=\"10\"/>"
      "<line x1=\"0\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"black\" />"
      "<line x1=\"125\" y1=\"25\" x2=\"150\" y2=\"25\" stroke=\"black\" />"
      "<text x=\"75\" y=\"26\" dominant-baseline=\"middle\" font-size=\"16\" "
      "text-anchor=\"middle\" fill=\"black\" font-family=\"sans-serif\">"
      "{}"
      "</text>",
      resistance);

  return SVGElement(svg, 150.0, 50.0, 25.0, 25.0);
}
