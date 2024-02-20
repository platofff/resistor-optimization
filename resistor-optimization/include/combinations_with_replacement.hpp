#pragma once

#include <algorithm>
#include <functional>
#include <ranges>
#include <vector>
#include <memory>

#if __has_cpp_attribute(__cpp_lib_generator)
#include <generator>
#else
#include "__generator.hpp"
#endif

std::generator<const std::vector<size_t>&> gen_indices(const size_t n,
                                                        const size_t r);

template <typename T>
std::generator<std::vector<T>&&> combinations_with_replacement(
    const std::vector<T>& pool,
    const size_t r) {
  for (const auto& indices : gen_indices(pool.size(), r)) {
    auto combination = std::vector<T>(r);

    auto transform_view =
        std::views::iota((size_t)0, r) |
        std::views::transform(
            [&indices, &pool](const size_t i) { return pool[indices[i]]; });

    std::ranges::copy(transform_view, combination.begin());
    co_yield std::move(combination);
  }
  co_return;
}