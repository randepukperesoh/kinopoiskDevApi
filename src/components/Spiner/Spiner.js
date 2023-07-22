import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import './Spiner.css'
import { Icon } from '@iconify/react';
import { useGetMovieKpRatingQuery, useGetTvSeriesQuery, useGetCartoonQuery, useGetAnimeQuery, 
    useGetAnimatedSeriesQuery, useGetTvShowQuery } from '../../Api/Api'

export default function Spiner ({ type }) {

    const [ numberCard, setNumberCard ] = useState(7);
    const [ movieNumber, setMovieNumber] = useState(7);

    const hook = type == 'movie' ? useGetMovieKpRatingQuery : type == 'tv-series'? useGetTvSeriesQuery : type == 'cartoon' ? useGetCartoonQuery : type == 'anime' ? useGetAnimeQuery : type == 'animated-series' ? useGetAnimatedSeriesQuery : type == 'tv-show' ? useGetTvShowQuery : null
    
    const {data = []} = hook(movieNumber)

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth > 1400 ? setNumberCard(7) : window.innerWidth > 1200 ? setNumberCard(6) : window.innerWidth > 1000 ? setNumberCard(5) : window.innerWidth > 800 ? setNumberCard(4) : setNumberCard(3)
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    let arrItems = [];
    
    if(data.docs) {
        arrItems = data.docs.map( (item, i) => {
            if( data.docs.length - numberCard <= i)
            return <Card args={item} key={item.id}/>
        })
    }

    return(
        <>
            <div className='spiner'>
                <div className='spinerLabel'>{type}</div>
                <div className="spinerWrapper">
                    <button className='nextPrev'> <Icon className='sliderBtn' onClick={()=> setMovieNumber(movieNumber-numberCard)} icon="grommet-icons:next" width="30" height="30" rotate={2} /> </button>
                        <div className='itemsWrapper'>
                            {arrItems}
                        </div>
                        <button className='nextPrev'> <Icon className='sliderBtn' onClick={()=> setMovieNumber(movieNumber+numberCard)} icon="grommet-icons:next" width="30" height="30" /> </button>
                </div>
            </div>
        </>
    )
}