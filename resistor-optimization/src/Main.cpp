#include <iostream>
#include "ResistanceOptimizer.hpp"

int main() {
#if !__has_include(<emscripten/bind.h>)
  // some tests
  int r = 3;
  std::vector<double> resistors{1.0, 1.7, 7.5, 3.6, 9};;

  const auto ro = ResistanceOptimizer(resistors);
  const auto [svg, resistance] = ro.optimize(1.7, r);
  std::cout << resistance << std::endl;
  std::cout << svg << std::endl;
#endif
}
