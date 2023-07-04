#include "combinations_with_replacement.hpp"

std::generator<const std::vector<size_t>&> gen_indicies(const size_t n,
                                                        const size_t r) {
  std::vector<size_t> indicies(r);
  co_yield indicies;
  const auto rev = indicies | std::views::reverse;

  while (true) {
    const auto found = std::ranges::find_if(
        rev.begin(), rev.end(), [n](const size_t x) { return x != n - 1; });
    if (found == rev.end()) {
      co_return;
    }

    const auto fill = *found + 1;

    for (auto &el : std::ranges::subrange(rev.begin(), std::next(found))) {
      el = fill;
    }

    co_yield indicies;
  }
}
