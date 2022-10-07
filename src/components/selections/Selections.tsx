import React, { useState } from "react";
import styles from "../styles/selections.module.scss";
import Numbers from "./Numbers";

const Selections = () => {
  const [isPadOpen, setIsPadOpen] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<Array<number>>([]);

  return (
    <section className={styles.select_container}>
      <span
        className={styles.select_button}
        onClick={() => setIsPadOpen(!isPadOpen)}
      >
        Choose a number
      </span>
      <Numbers isPadOpen={isPadOpen} setIsPadOpen={setIsPadOpen} />
    </section>
  );
};

export default Selections;
