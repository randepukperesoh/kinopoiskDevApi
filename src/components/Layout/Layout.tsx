import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss'
import React from "react";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { useWindowSize } from "@uidotdev/usehooks";
import { DesctopHeader } from "./DesctopHeader/DesctopHeader";
import { useEffect, useState } from "react";

export const Layout: React.FC = () => {
    const width = useWindowSize().width;
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem('token'))
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    function logout() {
        localStorage.removeItem('token')
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <>
            {width && width < 675 ? 
            <MobileHeader logout={logout} token={token}/> :
            <DesctopHeader logout={logout} token={token}/>}
            <main>
                <Outlet />
            </main>
            <footer>
                <div className={styles.social}> <a href="https://t.me/BeachPSh">Мой телеграм</a></div>
            </footer>
        </>
    )
}
