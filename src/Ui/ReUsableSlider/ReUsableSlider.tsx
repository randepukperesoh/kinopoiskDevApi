import { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReUsableSlider = ({
  children,
  settings,
}: {
  children: ReactNode;
  settings: Settings;
}) => {
  return <Slider {...settings}>{children}</Slider>;
};
