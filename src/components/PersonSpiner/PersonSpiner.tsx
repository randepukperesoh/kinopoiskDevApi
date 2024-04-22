import styles from './PersonSpiner.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Person } from '../types';
import { useWindowSize } from '@uidotdev/usehooks';

const PersonSpiner = (props: {person: Person[]}) => {
    const width = useWindowSize().width;
    const persons = props.person;
    const slidesToShow = width ? Math.floor(width/150) : 8;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 4,
      };
    return(
        <div className={styles.personSpinerWrapper}>
            <Slider {...settings}>
                {persons.map((item, i) => {
                    return <div key={'person' + i} className={styles.personsCard}>
                        <img width={100} src={item.photo}/>
                            <div className={styles.personsCardLabel}>{item.name}</div>
                        </div>
                })}
            </Slider>
            
        </div>
    )
}

export default PersonSpiner;