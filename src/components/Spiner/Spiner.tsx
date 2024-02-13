import Card from '../Card/Card'
import './Spiner.css'
 import { useGetMovieKpRatingQuery, useGetTvSeriesQuery, useGetCartoonQuery, useGetAnimeQuery, 
     useGetAnimatedSeriesQuery, useGetTvShowQuery } from '../../Api/Api'
import Slider from 'react-slick';
import { Doc } from '../types';

 const Spiner = (props: {type: string}) =>  {
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
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
    const type =  props.type;

    const hook = type == 'movie' ? useGetMovieKpRatingQuery
        : type == 'tv-series'? useGetTvSeriesQuery 
        : type == 'cartoon' ? useGetCartoonQuery : type == 'anime' ? useGetAnimeQuery 
        : type == 'animated-series' ? useGetAnimatedSeriesQuery : useGetTvShowQuery ;
    
    const data = hook('7')
    
    return(
        <div className='sliderWrapper' style={{
           // width: 1200 + "px"
          }}>
            {data.status != "fulfilled" ? "жду" : 
                <Slider {...settings}>
                    {data.currentData ? data.currentData.docs.map((item: Doc) => { 
                            return <Card {...item} key={item.id} />
                        }) : null
                    }
                </Slider>
            }
        </div>
    )
}
export default Spiner;