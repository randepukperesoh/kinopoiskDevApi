import Spiner from '../Spiner/Spiner';
import './Main.css'

 const Main = () => {
    
    return(
        <div className='mainPage'>
            <Spiner type={'movie'}/>
            {/* <Spiner type={'tv-series'} getData={useGetTvSeriesQuery}/> */}
            <Spiner type={'cartoon'}/>
            <Spiner type={'anime'}/>
            <Spiner type={'animated-series'}/>
            {/* <Spiner type={'tv-show'} getData={useGetMovieKpRatingQuery}/> */}
        
        </div>
    )
}
export default Main;