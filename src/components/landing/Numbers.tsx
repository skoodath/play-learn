import React, { useContext, useRef, useState } from "react";
import { selectNumber } from "../../state/actions";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";

interface NumberProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}
const Numbers = ({ setModal, setWelcome }: NumberProps) => {
  const { state, dispatch } = useContext(AppContext);

  const numRef = useRef<HTMLInputElement>(null);
  const uptoRef = useRef<HTMLInputElement>(null);

  const { currentUser } = state;

  const selectValue = () => {
    let num = +numRef.current!.value;
    let numUpto = +uptoRef.current!.value;

    dispatch(selectNumber(num, numUpto));
    setModal(false);
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
        <div className={styles.input_wrap}>
          <label className={styles.input_one}>
            Muliply
            <input type="text" ref={numRef} />
          </label>
          <label className={styles.input_one}>
            Upto
            <input type="text" ref={uptoRef} />
          </label>
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.select_button} onClick={selectValue}>
            Go
            <br />
            for it
          </button>
          <button
            className={styles.num_button}
            onClick={() => {
              setModal(false);
              setWelcome(true);
            }}
          >
            Maybe <br />
            Later
          </button>
        </div>
      </section>
    </section>
  );
};

export default Numbers;
