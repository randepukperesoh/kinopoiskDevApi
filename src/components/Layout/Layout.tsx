import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import { useEffect, useState } from "react";

export default function Layout() {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        const changeStorageHandler = () => {
            setTimeout(() => {
                const storedToken = localStorage.getItem('token');
                setToken(storedToken);
            }, 500);
        };

        window.addEventListener('changeStorage', changeStorageHandler);

        return () => {
            window.removeEventListener('changeStorage', changeStorageHandler);
        };
    }, []);

    // function logout() {
    //     localStorage.removeItem('token');
    //     window.dispatchEvent(new Event("changeStorage"));
    // }

    return (
        <>
            <header className="appHeader" >
                <div className='headerItem'><Link to={''}>Главная</Link></div>
                <div className='headerItem'><Link to={'page/movie'}>Фильмы</Link></div>
                <div className='headerItem'><Link to={'page/tv-series'}>Сериалы</Link></div>
                <div className='headerItem'><Link to={'page/cartoon'}>Cartoon</Link></div>
                <div className='headerItem'><Link to={'page/anime'}>Аниме</Link></div>
                <div className='headerItem'><Link to={'page/animated-series'}>Мультфильмы</Link></div>
                <div className='headerItem'><Link to={'page/tv-show'}>Тв-щоу</Link></div>
                {/* {token ? <div onClick={() => logout()} className='headerItem'><Link to={'../'}>Выйти</Link></div> : <div className='headerItem'><Link to={'login'}>Войти</Link></div>} */}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="social"> <a href="https://t.me/BeachPSh">Мой телеграм</a></div>
            </footer>
        </>
    )
}
