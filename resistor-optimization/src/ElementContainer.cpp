#include <algorithm>

#include "ElementContainer.hpp"

void ElementContainer::add(std::shared_ptr<Element> el) {
  elements.push_back(el);
  auto el_c = std::dynamic_pointer_cast<ElementContainer>(el);
  if (el_c) {
    el_c->parent = _weak_from_this();
    el_c->parent_idx = elements.size() - 1;
  }
}

std::shared_ptr<ElementContainer> ElementContainer::addCoW(
    std::shared_ptr<ElementContainer> container) const {
  std::shared_ptr<ElementContainer> node = this->clone();
  std::shared_ptr<ElementContainer> self_clone = node;

  while (!node->parent.expired()) {
    auto parent = node->parent.lock();
    auto parent_clone = parent->clone();
    parent_clone->elements[node->parent_idx] = node;
    node->parent = parent_clone;
    node = parent_clone;
  }

  self_clone->add(container);

  return node;
}

std::generator<std::shared_ptr<ElementContainer>>
ElementContainer::allNestedContainers() {
  co_yield _shared_from_this();

  for (const auto& el : elements) {
    auto sptr = std::dynamic_pointer_cast<ElementContainer>(el);
    if (!sptr) {
      continue;
    }
    co_yield sptr;

    for (const auto& c_el : sptr->allNestedContainers()) {
      co_yield c_el;
    }
  }
  co_return;
}

std::shared_ptr<ElementContainer> ElementContainer::clone() const {
  const auto copy = createNewInstance();
  std::ranges::copy(this->elements.begin(), this->elements.end(),
                    std::back_inserter(copy->elements));
  copy->parent = this->parent;
  copy->parent_idx = this->parent_idx;

  return copy;
}

std::vector<SVGElement> ElementContainer::getSVGElements() const {
  auto svg_elements = std::vector<SVGElement>();

  const auto svg_view = elements | std::views::transform(
                                 [](const auto& x) { return x->toSVG(); });

  std::ranges::copy(svg_view.begin(), svg_view.end(),
                    std::back_inserter(svg_elements));

  return svg_elements;
}
