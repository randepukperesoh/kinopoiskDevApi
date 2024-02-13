import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import './TypePage.css';
import {useParams} from 'react-router-dom';
import {useGetFilterTitleQuery} from '../../Api/Api';
import Card from '../Card/Card';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { optionsGenre, optionsStatus, optinsАge } from './TypePageconst';
import { JSX } from 'react/jsx-runtime';

interface dataInterface {
    year: string;
    acter: string;
    genre: string;
    status: string;
    kpRating: string;
    ageLimit: string;
}

const TypePage = () => {
    let type : string | undefined = useParams().type;
    const limit : number = 24;
    
    const {register, handleSubmit} = useForm<dataInterface>({
        defaultValues:{
            year: '2000',
        }
    });

    const submit: SubmitHandler<dataInterface> = (data) => setQuery('type=' + type + '&status=' + data.status + '&ageRating=' + data.ageLimit + '&year=' + data.year + '-2030' + '&limit=' + String(limit)+ '&persons=' + data.acter )//+ //'&genres.name=' + data.genre)

    const [query, setQuery] = useState<string>('type=' + type+ '&limit='+String(limit))

    useEffect(() => {
        setQuery('type=' + type+ '&limit='+String(limit))
    },[type])

    const data = useGetFilterTitleQuery(query)
    

    let arr = []
    for(let i=1960; i < 2030; i++){
        arr.push(i)
    }
    let arrItem: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | (JSX.Element | undefined)[] | null | undefined =[];

    arrItem = data.data ? data.data.docs.map( item =>  <Card {...item} key={item.id} /> ) : null ;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        rows: 3,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              }
          ]
      };
    
    return(
        <div className='typePage'>
            <form className='filter' onSubmit={handleSubmit(submit)}>
                <div className='flex'>
                    <div className='labelInput'> Год выхода : </div>
                    <select {...register('year')}>
                        {arr.map((i)=>{
                            return <option key={'year'+i} value={i}> {i}</option>
                        })}
                    </select>
                </div>
                <div className='flex'>
                    <div className='labelInput'> Жанр : </div>
                    <select {...register("genre")}>
                        {optionsGenre.map((option, i) => {
                         return <option value={option.value} key={i + 'G'}>{option.label}</option>
                        })}
                    </select>
                </div>
                <div className='flex'>
                    <div className='labelInput'>Статус релиза</div>
                    <select {...register("status")}>
                        {optionsStatus.map((option, i) => {
                            return <option value={option.value} key={i + 'S'}>{option.label}</option>
                        })}
                    </select>
                </div>
                {/* <div className='flex'>
                    <div className='labelInput'> Рейтинг кинопоиска {}</div>
                    <input {...register("kpRating")} min={0} defaultValue={6.8} max={10} step={0.1} type='range'/>
                </div> */}
                <div className='flex'>
                    <div className='labelInput'>Возрастной рейтинг</div>
                    <select {...register("ageLimit")}>
                        {optinsАge.map((option, i) => {
                            return <option value={option.value} key={i + 'aL'}>{option.label}</option>
                        })}
                    </select>
                </div>
                <div className='flex'>
                    <div className='labelInput'>Актер</div>
                    <input {...register("acter")} className='acterInput' type='text'/>
                </div>
                <input className='FilterBtn' type='submit' value={'Применить'}/>
            </form>

            <div className='filteredTitle'>
                        {data.data? 
                            <Slider {...settings}>
                                    {arrItem}
                            </Slider> : <div> Жду</div>
                        }
            </div>
        </div>
    )
}

export default TypePage;