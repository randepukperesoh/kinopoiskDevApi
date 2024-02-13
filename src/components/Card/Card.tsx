import { useState } from 'react'
import './Card.css'
import TitlePage from '../TitlePage/TitlePage'
import { Link } from 'react-router-dom'
import { Doc } from '../types'

const Card = (props: Doc) => {
    return(
        <Link to={'../../title/'+ props.id}> 
            <div className="cardWrapper">
                {props.poster.url ? <img width={130} height={180} src={props.poster.url}/> : null}
                    <div className='cardLabel'>{props.name}</div>
            </div>
        </Link>
    )
}

export default Card;
