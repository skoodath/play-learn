import React, { useContext, useRef } from "react";
import { setCurrentUser } from "../../state/actions";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";

interface WelcomeProps {
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome = ({ setWelcome }: WelcomeProps) => {
  const { dispatch } = useContext(AppContext);

  const nameRef = useRef<HTMLInputElement>(null);

  const addName = () => {
    let userName: string = nameRef.current!.value;
    if (!userName) {
      dispatch(setCurrentUser("Guest"));
    } else {
      dispatch(setCurrentUser(userName));
    }
    setWelcome(false);
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_message}>
        <p className={styles.knock_one}>Knock! Knock!</p>
        <p className={styles.knock_two}>Whose There!</p>
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          ref={nameRef}
          className={styles.input_field}
          placeholder="What's your name"
          maxLength={30}
          required
        />
        <button onClick={addName} className={styles.input_button}>
          Let's Go!
        </button>
      </div>
    </section>
  );
};

export default Welcome;
