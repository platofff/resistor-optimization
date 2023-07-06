#include <iostream>
#include "ResistanceOptimizer.hpp"

int main() {
#if !__has_include(<emscripten/bind.h>)
  // some tests
  int r = 5;
  std::vector<double> resistors{17.56};

  const auto ro = ResistanceOptimizer(resistors);
  const auto [svg, resistance] = ro.optimize(17.56, r);
  std::cout << resistance << std::endl;
  std::cout << svg << std::endl;
#endif
}
