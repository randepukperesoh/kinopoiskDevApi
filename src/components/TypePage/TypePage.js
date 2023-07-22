import { useState } from 'react'
import './TypePage.css'
import {useParams} from 'react-router-dom'
import {useGetFilterTitleQuery} from '../../Api/Api'
import Card from '../Card/Card'
import Select from 'react-select'

export default function FilmPage() {

    const type = useParams().type

    const [age, setAge] = useState(2023)
    const [limit, setLimit] = useState(100)
    const [genre, setGenre] = useState(null)
    const [person, setPerson] = useState('Пол Уокер')
    const [status, setStatus] = useState('completed')
    const [kpRating, setkpRating] = useState(6.8)
    const [ageRating, setAgeRating] = useState(16)

    const [query, setQuery] = useState('type=' + type)
    
    const {data = []} = useGetFilterTitleQuery(query)

    const optionsGenre = [
        {value: 'комедия', label:'комедия'},
        {value: 'биогрaфия', label: 'биогрaфия'},
        {value: 'криминал', label: 'криминал'},
        {value: 'боевик', label: 'боевик'},
        {value: 'детский', label: 'детский'},
        {value: 'семейный', label: 'семейный'},
        {value: 'реальное ТВ', label: 'реальное ТВ'},
        {value: 'документальный', label: 'документальный'},
        {value: 'мультфильм', label: 'мультфильм'},
        {value: 'короткометражка', label: 'короткометражка'},
        {value: 'мелодрама', label: 'мелодрама'},
        {value: 'аниме', label: 'аниме'},
        {value: 'фантастика', label: 'фантастика'},
        {value: 'фэнтези', label: 'фэнтези'},
        {value: 'приключения', label: 'приключения'},
        {value: 'триллер', label: 'триллер'}
    ];

    const optionsStatus = [
        {value: 'filming', label: 'съемка'},
        {value: 'pre-production', label: 'подготовка'},
        {label: 'completed', label: 'завершено'},
        {label: 'announced', label: 'анонсирован'},
        {label: 'post-production', label: 'послепроизводственный'}
    ]

    const optinsАge = [
        {value: 14, label: '14'},
        {value: 15, label: '15'},
        {value: 16, label: '16'},
        {value: 17, label: '17'},
        {value: 18, label: '18'},
        {value: 19, label: '19'},
        {value: 20, label: '20'},
        {value: 21, label: '21'},
        {value: 22, label: '22'},
        {value: 23, label: '23'},
    ] 

    function filtered(){
        setQuery('type=' + type + '&year=' + age + '-2030&' + '&limit' + limit+ '&person=' + person + 'genres.name' + genre); 
    }
    
    return(
        <div className='typePage'>
            <div className='filter'>
                <div className='flex'>
                    <div className='labelInput'> Год выхода : {age} </div>
                    <input min={1860} onChange={(e) =>setAge(Number(e.target.value))} defaultValue={2023} max={2030} step={1} type='range'/>
                </div>
                <div className='flex'>
                    <div className='labelInput'> Жанр : </div>
                    <Select onChange={(e) => setGenre(e.value)} options={optionsGenre} className="react-select-container"/>
                </div>
                <div className='flex'>
                    <div className='labelInput'>Актер</div>
                    <input onChange={(e) =>setPerson(e.target.value)} className='acterInput' type='text'/>
                </div>
                <div className='flex'>
                    <div className='labelInput'>Статус релиза</div>
                    <Select onChange={(e) => setStatus(e.value)} options={optionsStatus} className="react-select-container"/>
                    </div>
                <div className='flex'>
                    <div className='labelInput'> Рейтинг кинопоиска  {kpRating}</div>
                    <input min={0} onChange={(e) =>setkpRating(Number(e.target.value))} defaultValue={kpRating} max={10} step={0.1} type='range'/>
                </div>
                <div className='flex'>
                    <div className='labelInput'>Возрастной рейтинг</div>
                    <Select onChange={(e)=> setAgeRating(e.value)} options={optinsАge} className="react-select-container smallInp"/>
                    </div>
                
                <div className='flex'>
                    <button onClick={() => filtered()} className='FilterBtn'> Применить </button>
                </div>
            </div>

            <div className='filteredTitle'>
                {data.docs ? data.docs.map(item => {
                    return <Card args={item} key={item.id}/>
                }): null}
            </div>
        </div>
    )
}