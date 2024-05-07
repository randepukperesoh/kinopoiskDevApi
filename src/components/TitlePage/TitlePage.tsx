import { useParams } from 'react-router-dom'
import  styles from './TitlePage.module.scss'
import { useGetTitleByIdQuery } from '../../Api/Api'
import PersonSpiner from '../PersonSpiner/PersonSpiner'

export const TitlePage = () =>{
    const { id } = useParams();
    const {data, isFetching} = useGetTitleByIdQuery(Number(id))
    return(
        <>
        {isFetching ? <span className={styles.loader}>жду</span>:
            data && 
                <div className={styles.titlePage}>
                    <div className={styles.imgDesc}>
                        <img className={styles.img} src={data.poster.url}/>
                        <div>
                            <div className={styles.titleLabel}>{data.name}</div>
                            <div className={styles.titleDescription}>{data.description}</div>
                            <div className={styles.smallInfo}>
                                <div>{data.year}</div>
                                {data.genres.map(genre => {
                                    return <div>{genre.name}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.ratingBlock}>
                        <div className={styles.ratingCard}> <div>film Critics</div> <div className='alignCentre'>{data.rating.filmCritics}</div></div>
                        <div className={styles.ratingCard}> <div>Imdb</div> <div className='alignCentre'>{data.rating.imdb} </div></div>
                        <div className={styles.ratingCard}> <div>Кинопоиск</div> <div className='alignCentre'>{data.rating.kp} </div></div>
                        <div className={styles.ratingCard}> <div>russian Film Critics</div><div className='alignCentre'>{data.rating.russianFilmCritics} </div></div>
                    </div>
                    <div className={styles.watchBlock}>
                        {data.watchability.items.map( item => {
                            return <div className={styles.watchItem}><a href={item.url}><img width={52} height={52} src={item.logo.url} /></a></div>
                        })}
                    </div>
                    {data.persons ?  <div className={styles.personsBlock}>Актеры
                        <PersonSpiner person={data.persons}/>
                    </div> : null
                    }
                </div>
        }
        </>
    )
}
