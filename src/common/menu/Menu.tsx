import React, { SetStateAction } from "react";
import styles from "../styles/menu.module.scss";

interface MenuProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
}

const Menu = ({ setOpenMenu, openMenu }: MenuProps) => {
  return (
    <>
      <nav className={styles.navbar} onClick={() => setOpenMenu(!openMenu)}>
        <span className={styles.navitem_one}>Learn More</span>
        <span className={styles.navitem_two}></span>
      </nav>
    </>
  );
};

export default Menu;
