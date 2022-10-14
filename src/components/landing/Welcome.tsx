import React, { useContext, useEffect, useRef } from "react";
import { setCurrentUser, setWelcome } from "../../state/actions";
import { AppContext } from "../../state/appContext";
import styles from "../styles/header.module.scss";

interface WelcomeProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}

const Welcome = ({ modal, setModal }: WelcomeProps) => {
  const { dispatch } = useContext(AppContext);

  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    nameRef.current!.focus();
  });

  const addName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName: string = nameRef.current!.value;
    if (!userName) {
      dispatch(setCurrentUser("Buddy"));
    } else {
      dispatch(setCurrentUser(userName));
    }
    dispatch(setWelcome(false));
    setModal(!modal);
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_message}>
        <p className={styles.knock_one}>knock! knock!</p>
        <p className={styles.knock_two}>Shall we do some math?</p>
      </div>
      <form className={styles.input_wrapper} onSubmit={addName}>
        <input
          type="text"
          ref={nameRef}
          className={styles.input_field}
          placeholder="What's your name?"
          maxLength={30}
        />
        <button type="submit" className={styles.input_button}>
          Let's Go!
        </button>
      </form>
    </section>
  );
};

export default Welcome;
