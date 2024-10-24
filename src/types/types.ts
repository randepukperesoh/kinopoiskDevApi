interface innerSettings {
  adaptiveHeight: boolean;
  dots: boolean;
  infinite: boolean;
  slidesToScroll: number;
  slidesToShow: number;
  speed: number;
}

export interface Settings {
  adaptiveHeight: boolean;
  dots: boolean;
  infinite: boolean;
  responsive: innerSettings[];
  slidesToScroll: number;
  slidesToShow: number;
  speed: number;
}
