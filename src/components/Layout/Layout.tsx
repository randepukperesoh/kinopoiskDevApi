import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss'
import React from "react";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { useWindowSize } from "@uidotdev/usehooks";
import { DesctopHeader } from "./DesctopHeader/DesctopHeader";
//import { useEffect, useState } from "react";

export const Layout: React.FC = () => {
    const width = useWindowSize().width;
    // const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    // useEffect(() => {
    //     const changeStorageHandler = () => {
    //         setTimeout(() => {
    //             const storedToken = localStorage.getItem('token');
    //             setToken(storedToken);
    //         }, 500);
    //     };

    //     window.addEventListener('changeStorage', changeStorageHandler);

    //     return () => {
    //         window.removeEventListener('changeStorage', changeStorageHandler);
    //     };
    // }, []);

    // function logout() {
    //     localStorage.removeItem('token');
    //     window.dispatchEvent(new Event("changeStorage"));
    // }

    return (
        <>
            {width && width < 675 ? <MobileHeader/> : <DesctopHeader/>}
            <main>
                <Outlet />
            </main>
            <footer>
                <div className={styles.social}> <a href="https://t.me/BeachPSh">Мой телеграм</a></div>
            </footer>
        </>
    )
}
