import { useParams } from 'react-router-dom'
import './TitlePage.css'
import { useGetTitleByIdQuery } from '../../Api/Api'
import PersonSpiner from '../PersonSpiner/PersonSpiner'

const TitlePage = () =>{
    const { id } = useParams();
    const data = useGetTitleByIdQuery(String(id))
    return(
        <>
        {data.status != "fulfilled" ? <div>жду</div>:
            data.data? 
                <div className="titlePage">
                    <div className='imgDesc flex'>
                        <img width={300} src={data.data.docs[0].poster.url}/>
                        <div>
                            <div className='titleLabel'>{data.data.docs[0].name}</div>
                            <div className='titleDescription'>{data.data.docs[0].description}</div>
                            <div className='smallInfo flex'>
                                <div>{data.data.docs[0].year}</div>
                                {data.data.docs[0].genres.map(genre => {
                                    return <div>{genre.name}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='ratingBlock'>
                        <div className='ratingCard'> <div>film Critics</div> <div className='alignCentre'>{data.data.docs[0].rating.filmCritics}</div></div>
                        <div className='ratingCard'> <div>Imdb</div> <div className='alignCentre'>{data.data.docs[0].rating.imdb} </div></div>
                        <div className='ratingCard'> <div>Кинопоиск</div> <div className='alignCentre'>{data.data.docs[0].rating.kp} </div></div>
                        <div className='ratingCard'> <div>russian Film Critics</div><div className='alignCentre'>{data.data.docs[0].rating.russianFilmCritics} </div></div>
                    </div>
                    <div className='watchBlock'>
                        {data.data.docs[0].watchability.items.map( item => {
                            return <div className='watchItem'><a href={item.url}><img width={72} height={72} src={item.logo.url} /></a></div>
                        })}
                    </div>
                    {data.data.docs[0].persons ?  <div className='personsBlock'>Актеры
                        <PersonSpiner person={data.data.docs[0].persons}/>
                    </div> : null
                    }

                </div> : null
        }
        </>
    )
}

export default TitlePage;