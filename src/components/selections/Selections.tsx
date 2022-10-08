import React, { useContext, useState } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/selections.module.scss";
import Numbers from "./Numbers";

const Selections = () => {
  const [isPadOpen, setIsPadOpen] = useState(false);

  const { state } = useContext(AppContext);

  return (
    <section className={styles.select_container}>
      <span
        className={styles.select_button}
        onClick={() => setIsPadOpen(!isPadOpen)}
      >
        Choose a number {state.selectedNumber === 0 ? "" : state.selectedNumber}
      </span>
      <Numbers isPadOpen={isPadOpen} setIsPadOpen={setIsPadOpen} />
    </section>
  );
};

export default Selections;
