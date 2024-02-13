import './PersonSpiner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Person } from '../types';

const PersonSpiner = (props: {person: Person[]}) => {
    const persons = props.person;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
      };
    return(
        <div className="personSpinerWrapper">
            <Slider {...settings}>
                {persons.map((item, i) => {
                    return <div key={'person' + i} className='personsCard'>
                        <img width={100} src={item.photo}/>
                            <div className='personsCardLabel'>{item.name}</div>
                        </div>
                })}
            </Slider>
            
        </div>
    )
}

export default PersonSpiner;