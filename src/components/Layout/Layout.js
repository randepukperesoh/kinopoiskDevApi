import { Link, Outlet } from "react-router-dom"
import './Layout.css'
import { useEffect, useState } from "react"

export default function Layout() {
    let [token, setToken] = useState(false);
    
    window.addEventListener('changeStorage', () => {
        setTimeout(() => {
            console.log(localStorage.getItem('token'))
        setToken(localStorage.getItem('token'))
        }, 500);
    })

    function logout(){
        localStorage.removeItem('token')
        window.dispatchEvent(new Event("changeStorage"))
    }
    return(
        <>
        <header className="appHeader" >
            <div className='headerItem'><Link to={''}>Главная</Link> </div>
            <div className='headerItem'><Link to={'page/movie'}>Фильмы</Link></div>
            <div className='headerItem'><Link to={'page/tv-series'}>Сериалы</Link></div>
            <div className='headerItem'><Link to={'page/cartoon'}>Cartoon</Link></div>
            <div className='headerItem'><Link to={'page/anime'}>Аниме</Link></div>
            <div className='headerItem'><Link to={'page/animated-series'}>Мультфильмы</Link></div>
            <div className='headerItem'><Link to={'page/tv-show'}>Тв-щоу</Link></div>
            {token ? <div onClick={()=> logout()} className='headerItem'><Link to={'../'}>Выйти</Link></div> : <div className='headerItem'><Link to={'login'}>Войти</Link></div>}
            
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            2021
        </footer>
        </>
    )
}
  
// useEffect(() => {
//     const handleStorageChange = () => {
//         setToken(localStorage.getItem('token'))
//     }

//     window.addEventListener('storage', handleStorageChange)

//     return () => {
//         window.removeEventListener('storage', handleStorageChange)
//     }
// }, []) // Здесь только пустой массив, так как мы хотим вызвать это только при загрузке компонента