#pragma once

#include <sstream>

#include "ElementContainer.hpp"

class ParallelContainer : public ElementContainer,
                          public std::enable_shared_from_this<ParallelContainer> {
 public:
  virtual double getResistance() const override;
  virtual SVGElement toSVG() const override;

 protected:
  virtual std::shared_ptr<ElementContainer> createNewInstance() const override;
  virtual std::shared_ptr<ElementContainer> _shared_from_this() override;
  virtual std::weak_ptr<ElementContainer> _weak_from_this() override;

 private:
  std::tuple<double, double> calculateDimensions(
      const std::vector<SVGElement>& svg_elements) const;

  void extendConnectors(
      std::vector<SVGElement>& svg_elements,
      const double offset_x,
      const double width,
      std::ostream& os) const;

  std::tuple<double, double, double, double, double, double>
  calculateLinePostions(
      const std::vector<SVGElement>& svg_elements,
      const double height) const;

  void elementsSVG(
      std::vector<SVGElement>& svg_elements,
      const double offset_x,
      const double width,
      const double l1_start_y,
      const double l1_end_y,
      const double l1_middle_y,
      const double l2_start_y,
      const double l2_end_y,
      const double l2_middle_y,
      std::ostream& os) const;
};
