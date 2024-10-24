import { Link } from "react-router-dom";
import { routes } from "../../../consts/routes";
import Hamburger from "hamburger-react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { PopoverMenu } from "../../../Ui/PopoverMenu/PopoverMenu";

import styles from "./Header.module.scss";

export const Header = () => {
  const { isMobile } = useIsMobile();

  const getItems = [
    routes.map((el) => (
      <div key={el.name} className={styles.header_item}>
        <Link to={el.value}>{el.name}</Link>
      </div>
    )),
    // <div
    //   // onClick={() => logout()}
    //   className={styles.header_item}
    // >
    //   Выйти
    // </div>,
    <div key={"login"} className={styles.header_item}>
      <Link to={"login"}>Войти</Link>
    </div>,
  ];

  return (
    <header className={styles.header}>
      {isMobile ? (
        <PopoverMenu
          content={
            <div className={styles.header_mobile}>
              <div className={styles.header_mobile_menu}>{getItems}</div>
            </div>
          }
        >
          {(menu, setMenu) => (
            <Hamburger color="#4FD1C5" toggled={menu} toggle={setMenu} />
          )}
        </PopoverMenu>
      ) : (
        getItems
      )}
    </header>
  );
};
