#pragma once

#include <memory>
#include "SVGElement.hpp"

class Element {
 public:
  virtual ~Element() = default;
  virtual double getResistance() const = 0;
  virtual SVGElement toSVG() const = 0;
};