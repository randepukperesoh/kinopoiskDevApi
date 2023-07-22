import { useState } from 'react'
import './Card.css'
import TitlePage from '../TitlePage/TitlePage'
import { Link } from 'react-router-dom'

export default function Card({args}) {
    console.log(args)
    return(
        <Link to={'../../title/'+ args.id}> 
            <div className="cardWrapper">
                {args.poster.url ? <img width={130} height={180} src={args.poster.url}/> : null}
                    <div className='cardLabel'>{args.name}</div>
            </div>
        </Link>
    )
}