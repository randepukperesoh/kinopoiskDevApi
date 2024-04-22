import Card from '../Card/Card';
import Slider from "react-slick";
import { Doc } from '../types';
import styles from './GridOfTitles.module.scss'

export const GridOfTitles: React.FC<{data: Doc[]}> = ({data}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        rows: 4,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 2,
                  rows: 4,
                }
              },{
                breakpoint: 1440,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  rows: 4,
                }
              },{
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  rows: 4,
                }
              },{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  rows: 4,
                }
              },{
                breakpoint: 675,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  rows: 8,
                  dots: false
                }
              },
          ]
      };

    return(
        <Slider className={styles.slickSlider} {...settings}>
                {data.map(item => {
                    return <Card {...item} key={item.id}/>
                })}
        </Slider>
    )
}