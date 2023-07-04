#include "Element.hpp"
#include "SVGElement.hpp"

class Resistor : public Element {
 public:
  explicit Resistor(double resistance);
  double getResistance() const override;
  SVGElement toSVG() const override;

 private:
  double resistance;
};