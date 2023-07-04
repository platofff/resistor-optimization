#pragma once

#include "ElementContainer.hpp"

class SeriesContainer : public ElementContainer,
                        public std::enable_shared_from_this<SeriesContainer> {
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
};
