import React, { useContext } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/about.module.scss";

interface AboutProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
}

const LearnMore = ({ setOpenMenu, openMenu }: AboutProps) => {
  return (
    <section
      className={`${styles.about_wrapper} ${
        openMenu ? styles.about_visible : styles.about_hidden
      } `}
    >
      <section className={styles.about_card}>
        <span
          className={styles.close_button}
          onClick={() => setOpenMenu(!openMenu)}
        >
          &times;
        </span>
        <div className={styles.greeting}>
          <span className={styles.user}>Hello</span>
          <p className={styles.user_message}>
            This is a simple game to teach children multiplication through skip
            counting
          </p>
        </div>
      </section>
    </section>
  );
};

export default LearnMore;
