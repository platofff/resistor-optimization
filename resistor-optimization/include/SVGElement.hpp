#pragma once

#include <string>

class SVGElement {
 public:
  SVGElement(std::string code,
             double width,
             double height,
             double left_end_y,
             double right_end_y);

  friend std::ostream& operator<<(std::ostream& os, const SVGElement& el);

  double getHeight() const;
  double getWidth() const;
  double getLeftEndY() const;
  double getRightEndY() const;
  double getOffsetX() const;
  double getOffsetY() const;

  void setOffsetX(double offset_x);
  void setOffsetY(double offset_y);

  private:
    std::string code;
    double width, height;
    double left_end_y, right_end_y;
    double offset_x = 0;
    double offset_y = 0;
};
