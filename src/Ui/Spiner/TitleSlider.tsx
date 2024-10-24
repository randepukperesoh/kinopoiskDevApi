import Card from "../../components/Card/Card";
import {
  useGetMovieKpRatingQuery,
  useGetTvSeriesQuery,
  useGetCartoonQuery,
  useGetAnimeQuery,
  useGetAnimatedSeriesQuery,
  useGetTvShowQuery,
} from "../../Api/Api";
import { Doc } from "../../components/types";
import { Loading } from "../Loading/Loading";
import { ReUsableSlider } from "../ReUsableSlider/ReUsableSlider";

const settings = {
  dots: true,
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

const TitleSlider = ({ type }: { type: string }) => {
  const hook =
    (type === "movie" && useGetMovieKpRatingQuery) ||
    (type == "tv-series" && useGetTvSeriesQuery) ||
    (type == "cartoon" && useGetCartoonQuery) ||
    (type == "anime" && useGetAnimeQuery) ||
    (type == "animated-series" && useGetAnimatedSeriesQuery) ||
    useGetTvShowQuery;

  const { data, isLoading } = hook(7);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ReUsableSlider settings={settings}>
      {data && data.docs.map((item: Doc) => <Card item={item} key={item.id} />)}
    </ReUsableSlider>
  );
};
export default TitleSlider;
