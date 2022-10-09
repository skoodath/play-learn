import React, { useContext, useState } from "react";
import { selectNumber } from "../../state/actions";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";

/* interface NumberProps {
  isPadOpen: boolean;
  setIsPadOpen: React.Dispatch<React.SetStateAction<boolean>>;
} */
const Numbers = () => {
  const { state, dispatch } = useContext(AppContext);

  const { currentUser } = state;

  const selectValue = (num: number) => {
    dispatch(selectNumber(num));
  };
  return (
    <section className={styles.num_wrapper}>
      <section className={`${styles.num_card}`}>
        <div className={styles.greeting}>
          <span className={styles.user}>
            Hello <span>{currentUser}!</span>
          </span>
          <p className={styles.user_message}>
            You can pick a number and choose upto what number you want to try
            the table
          </p>
        </div>
        <div>
          <label>
            Pick a number
            <input />
          </label>
          <label>
            table till
            <input />
          </label>
        </div>
        <div>
          <span className={styles.select_button}>Go for it</span>
          <span className={styles.num_button}>i change my mind</span>
        </div>
      </section>
    </section>
  );
};

export default Numbers;
