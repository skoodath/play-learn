import React, { useContext, useRef, useState } from "react";
import { selectNumber } from "../../state/actions";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";

interface NumberProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}
const Numbers = ({ setModal, modal, setWelcome }: NumberProps) => {
  const { state, dispatch } = useContext(AppContext);

  const numRef = useRef<HTMLInputElement>(null);
  const uptoRef = useRef<HTMLInputElement>(null);

  const { currentUser } = state;

  const selectValue = () => {
    let num = +numRef.current!.value;
    let numUpto = +uptoRef.current!.value;

    if (num < 50 && numUpto < 50) {
      dispatch(selectNumber(num, numUpto));
    }
    setModal(!modal);
  };
  return (
    <section
      className={`${styles.num_wrapper} ${
        modal ? styles.num_visible : styles.num_hidden
      } `}
    >
      <section className={`${styles.num_card}`}>
        <div className={styles.greeting}>
          <span className={styles.user}>
            Hello <span>{currentUser}!</span>
          </span>
          <p className={styles.user_message}>
            Pick a number and choose upto what number you want to do the table
          </p>
        </div>
        <div className={styles.input_wrap}>
          <span>Multiply</span>
          <label className={styles.input_one}>
            <input type="number" ref={numRef} min={0} max={50} />
          </label>
          <span>till</span>
          <label className={styles.input_one}>
            <input type="number" ref={uptoRef} min={0} max={50} />
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
              setModal(!modal);
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
