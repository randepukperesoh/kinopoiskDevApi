import styles from '../Layout.module.scss'
import { Link } from "react-router-dom";

export const DesctopHeader = () => {

    return(
        <header className={styles.appHeader} >
                <div className={styles.headerItem}><Link to={''}>Главная</Link></div>
                <div className={styles.headerItem}><Link to={'page/movie'}>Фильмы</Link></div>
                <div className={styles.headerItem}><Link to={'page/tv-series'}>Сериалы</Link></div>
                <div className={styles.headerItem}><Link to={'page/cartoon'}>Cartoon</Link></div>
                <div className={styles.headerItem}><Link to={'page/anime'}>Аниме</Link></div>
                <div className={styles.headerItem}><Link to={'page/animated-series'}>Мультфильмы</Link></div>
                <div className={styles.headerItem}><Link to={'page/tv-show'}>Тв-щоу</Link></div>
                {/* {token ? <div onClick={() => logout()} className='headerItem'><Link to={'../'}>Выйти</Link></div> : <div className='headerItem'><Link to={'login'}>Войти</Link></div>} */}
            </header>
    )
}