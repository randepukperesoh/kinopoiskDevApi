import { useGetTitleByIdQuery, useGetImageByIdQuery } from '../../Api/Api';
import { Link } from 'react-router-dom';
import Spiner from '../Spiner/Spiner';
import styles from './Main.module.scss'
import { useEffect, useState } from 'react';
import { ErorrPage } from '../ErorrPage/ErorrPage';
import { Loading } from '../Loading/Loading';

 export const Main = () => {
    const [id, setId] = useState<number>(Math.floor(Math.random()*10000))
    useEffect(()=>{setId(Math.floor(Math.random()*10000))},[])
    
    const {data, isLoading} = useGetTitleByIdQuery(id);
    const {currentData} = useGetImageByIdQuery(id)
    if (isLoading) return <Loading/>
    if ( !data || !currentData ) return <ErorrPage/>

    let url = '';

    if ( currentData.docs.length > 0 && currentData.docs[0].url ) {
        console.log(currentData.docs[0])
        url = currentData.docs[0].url
        console.log(id, ' ', url)
    }

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