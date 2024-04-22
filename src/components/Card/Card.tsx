import styles from './Card.module.scss'
import { Link } from 'react-router-dom'
import { Doc } from '../types'

const Card = (props: Doc) => {
    return(
        <Link className={styles.link} to={'../../title/'+ props.id}> 
            <div className={styles.cardWrapper}>
                {props.poster.url ? <img width={130} height={180} src={props.poster.url}/> : null}
            </div>
        </Link>
    )
}

export default Card;
