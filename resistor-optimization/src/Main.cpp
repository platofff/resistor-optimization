#include <iostream>
#include "ResistanceOptimizer.hpp"

int main() {
#if !__has_include(<emscripten/bind.h>)
  // some tests
  int r = 4;
  std::vector<double> resistors{1.0, 1.7, 4.7, 5.6};

  const auto ro = ResistanceOptimizer(resistors);
  const auto [svg, resistance] = ro.optimize(1.2, r);
  std::cout << resistance << std::endl;
  std::cout << svg << std::endl;
#endif
}
