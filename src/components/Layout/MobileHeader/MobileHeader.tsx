import { MouseEvent, useState } from 'react';
import styles from '../Layout.module.scss'
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'

export const MobileHeader: React.FC = () => {

    const [ menu, setMenu ] = useState<boolean>(false);

    const wrraperHendler = (e:MouseEvent) => {
        e.stopPropagation()
        setMenu(false)
    }
    
    return(
        <header className={styles.appHeader} >
            <div className={styles.btnWrapper}>
                <Hamburger color="#4FD1C5" toggled={menu} toggle={setMenu}/>
            </div>
            
            {menu && <>
                    <div onClick={(e) => wrraperHendler(e)} className={styles.mobileWrapper}>
                        <div className={styles.mobileMenu}>
                            <div className={styles.headerItem}><Link to={''}>Главная</Link></div>
                            <div className={styles.headerItem}><Link to={'page/movie'}>Фильмы</Link></div>
                            <div className={styles.headerItem}><Link to={'page/tv-series'}>Сериалы</Link></div>
                            <div className={styles.headerItem}><Link to={'page/cartoon'}>Cartoon</Link></div>
                            <div className={styles.headerItem}><Link to={'page/anime'}>Аниме</Link></div>
                            <div className={styles.headerItem}><Link to={'page/animated-series'}>Мультфильмы</Link></div>
                            <div className={styles.headerItem}><Link to={'page/tv-show'}>Тв-щоу</Link></div>
                        </div> 
                    </div>
                    </>}
                {/* {token ? <div onClick={() => logout()} className='headerItem'><Link to={'../'}>Выйти</Link></div> : <div className='headerItem'><Link to={'login'}>Войти</Link></div>} */}
            </header>
    )
}