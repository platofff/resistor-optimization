#pragma once

#include "Element.hpp"

#include <vector>
#if __has_cpp_attribute(__cpp_lib_generator)
#include <generator>
#else
#include "__generator.hpp"
#endif

class ElementContainer : public Element {
 protected:
  std::vector<std::shared_ptr<Element>> elements;
  virtual std::shared_ptr<ElementContainer> createNewInstance() const = 0;
  std::shared_ptr<ElementContainer> clone() const;
  std::vector<SVGElement> getSVGElements() const;

  virtual std::shared_ptr<ElementContainer> _shared_from_this() = 0;
  virtual std::weak_ptr<ElementContainer> _weak_from_this() = 0;

 public:
  using Element::getResistance;
  using Element::toSVG;

  void add(std::shared_ptr<Element> el);
  std::weak_ptr<ElementContainer> parent;
  size_t parent_idx = 0;

  std::generator<std::shared_ptr<ElementContainer>> allNestedContainers();

  std::uint_fast32_t getNumberOfResistors() const;

  std::shared_ptr<ElementContainer> addCoW(
      std::shared_ptr<Element> el) const;

  explicit ElementContainer() = default;
};