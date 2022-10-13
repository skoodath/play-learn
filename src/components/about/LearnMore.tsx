import React, { useContext } from "react";
import CloseButton from "../../common/buttons/CloseButton";
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
        <CloseButton setOpenModal={setOpenMenu} openModal={openMenu} />
        <h2 className={styles.title}>Multiplication Table</h2>
        <div className={styles.greeting}>
          <p className={styles.user_message}>
            A skip counting game to learn multiplication table! <br />
            <br />
            For example, pick 5 to do table for 5 and then pick 10 to do 5's
            table from 1 to 10.
          </p>
        </div>
      </section>
    </section>
  );
};

export default LearnMore;
