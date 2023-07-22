import { useParams } from 'react-router-dom'
import './TitlePage.css'
import { useGetTitleByIdQuery } from '../../Api/Api'
import PersonSpiner from '../PersonSpiner/PersonSpiner'


export default function TitlePage({}) {
    
    const {data =[]} = useGetTitleByIdQuery(useParams().id)

    
    if(!data.docs) return null
    console.log(data.docs[0].persons)
    return(
        <div className="titlePage">
            <div className='imgDesc flex'>
                <img width={300} src={data.docs[0].poster.url}/>
                <div>
                    <div className='titleLabel'>{data.docs[0].name}</div>
                    <div className='titleDescription'>{data.docs[0].description}</div>
                    <div className='smallInfo flex'>
                        <div>{data.docs[0].year}</div>
                        {data.docs[0].genres.map(genre => {
                            return <div>{genre.name}</div>
                        })}
                    </div>
                </div>
            </div>
            <div className='ratingBlock'>
                <div className='ratingCard'> <div>film Critics</div> <div className='alignCentre'>{data.docs[0].rating.filmCritics}</div></div>
                <div className='ratingCard'> <div>Imdb</div> <div className='alignCentre'>{data.docs[0].rating.imdb} </div></div>
                <div className='ratingCard'> <div>Кинопоиск</div> <div className='alignCentre'>{data.docs[0].rating.kp} </div></div>
                <div className='ratingCard'> <div>russian Film Critics</div><div className='alignCentre'>{data.docs[0].rating.russianFilmCritics} </div></div>
            </div>
            <div className='watchBlock'>
                {data.docs[0].watchability.items.map( item => {
                    return <div className='watchItem'><a href={item.url}><img width={72} height={72} src={item.logo.url} /></a></div>
                })}
            </div>
            {!data.docs[0].persons ? null : 
            <div className='personsBlock'>
                Актеры
                <PersonSpiner items={data.docs[0].persons}/>
            </div>
            }
            
        </div>
    )
}