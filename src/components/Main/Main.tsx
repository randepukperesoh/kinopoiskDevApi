import { useGetTitleByIdQuery, useGetImageByIdQuery } from '../../Api/Api';
import { Link } from 'react-router-dom';
import Spiner from '../Spiner/Spiner';
import styles from './Main.module.scss'
import { useEffect, useState } from 'react';

 const Main = () => {
    const [id, setId] = useState<number>(2001)
    useEffect(()=>{setId(Math.floor(Math.random()*10000))},[])
    
    const {data} = useGetTitleByIdQuery(id);
    const {currentData} = useGetImageByIdQuery(id)
    
    if (!data) return null

    if ( !currentData) {
        return null
    } 
    const url = currentData.docs[0].url ? currentData.docs[0].url : '';
    return(
        <>
            <div style={{ backgroundImage: `url(${url}`, backgroundSize: 'cover' }} className={styles.mainPage}>
                <div className={styles.TitleWrapper}>
                    <h2>{data.name}</h2>
                    <div>{data.description}</div>
                    <div className={styles.moreBtn}><Link to={'/title/'+ id}>Смотреть</Link></div>
                </div>
            </div>
            <div className={styles.sliderWrapper}>
                <Spiner type='movie'></Spiner>
            </div>
        </>
    )
}
export default Main;