import './PersonSpiner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PersonSpiner({items}) {
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
                {items.map((item, i) => {
                    return <div key={'person' + i} className='personsCard'>
                        <img width={100} src={item.photo}/>
                            <div className='personsCardLabel'>{item.name}</div>
                        </div>
                })}
            </Slider>
            
        </div>
    )
}