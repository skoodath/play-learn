import React, { useContext, useEffect, useRef, useState } from "react";
import { selectNumber, setWelcome } from "../../state/actions";
import { AppContext } from "../../state/appContext";
import styles from "../styles/header.module.scss";

interface NumberProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}
const Numbers = ({ setModal, modal }: NumberProps) => {
  const { state, dispatch } = useContext(AppContext);

  const numRef = useRef<HTMLInputElement>(null);
  const uptoRef = useRef<HTMLInputElement>(null);

  const { currentUser } = state;

  useEffect(() => {
    numRef.current!.focus();
  });

  const selectValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let num = +numRef.current!.value;
    let numUpto = +uptoRef.current!.value;

    if (num < 50 && numUpto < 50) {
      dispatch(selectNumber(num, numUpto));
    }
    numRef.current!.value = "";
    uptoRef.current!.value = "";
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
        </div>
        <form className={styles.form} onSubmit={selectValue}>
          <div className={styles.input_wrap}>
            <span>Choose a number you want to try</span>
            <label className={styles.input_one}>
              <input type="number" ref={numRef} min={0} max={50} />
            </label>
          </div>
          <div className={styles.input_wrap}>
            <span>Upto what number do you want to multiply above number?</span>
            <label className={styles.input_one}>
              <input type="number" ref={uptoRef} min={0} max={50} />
            </label>
          </div>

          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.select_button}>
              Go
              <br />
              for it
            </button>
            <button
              type="reset"
              className={styles.num_button}
              onClick={() => {
                setModal(!modal);
                dispatch(setWelcome(true));
              }}
            >
              Maybe <br />
              Later
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Numbers;
