import { Person } from "../types";
import { Cart } from "./Cart";
import { ReUsableSlider } from "../../Ui/ReUsableSlider/ReUsableSlider";
import { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  // className: "popa",
  // centerMode: true,
  variableWidth: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const PersonsSlider = ({ carts }: { carts: Person[] }) => {
  return (
    <ReUsableSlider settings={settings}>
      {carts.map((item, i) => (
        <Cart item={item} key={"person" + i} />
      ))}
    </ReUsableSlider>
  );
};

export default PersonsSlider;
