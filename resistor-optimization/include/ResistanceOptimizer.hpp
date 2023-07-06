#pragma once

#include <vector>

#include "ElementContainer.hpp"
#include "Resistor.hpp"

class ResistanceOptimizer {
 private:
  std::vector<std::shared_ptr<Resistor>> resistors;

  std::generator<std::shared_ptr<ElementContainer>> generateCombinations(
      const std::vector<const std::shared_ptr<Resistor>>::iterator begin,
      const std::vector<const std::shared_ptr<Resistor>>::iterator end,
      const std::shared_ptr<ElementContainer> base) const;
  static constexpr double ACCURACY = 0.0001; // TODO non-constant

 public:
  explicit ResistanceOptimizer(std::vector<double> &resistances);

  std::pair<std::string, double> optimize(const double target_resistance, const size_t max_resistors) const;
};
