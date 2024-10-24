import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>
        <div className={styles.social}>
          <a href="https://t.me/BeachPSh">Мой телеграм</a>
        </div>
      </footer>
    </>
  );
};
