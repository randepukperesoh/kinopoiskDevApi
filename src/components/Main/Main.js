import { useGetMovieKpRatingQuery, useGetTvSeriesQuery } from '../../Api/Api'
import Spiner from '../Spiner/Spiner';
import './Main.css'

export default function Main () {
    
    return(
        <div className='mainPage'>
            <Spiner type={'movie'} getData={useGetMovieKpRatingQuery}/>
            {/* <Spiner type={'tv-series'} getData={useGetTvSeriesQuery}/> */}
            <Spiner type={'cartoon'} getData={useGetMovieKpRatingQuery}/>
            <Spiner type={'anime'} getData={useGetMovieKpRatingQuery}/>
            <Spiner type={'animated-series'} getData={useGetMovieKpRatingQuery}/>
            {/* <Spiner type={'tv-show'} getData={useGetMovieKpRatingQuery}/> */}
        
        </div>
    )
}