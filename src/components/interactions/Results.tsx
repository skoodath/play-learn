import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../../state/context";
import { generateGrid } from "../../utils/generateArray";
import styles from "../styles/interactions.module.scss";

/* interface ResultProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
} */
const Results = () => {
  const { state } = useContext(AppContext);
  const { table, currentUser } = state;

  return (
    <section className={`${styles.result_wrapper}`}>
      <section className={`${styles.num_card}`}>
        <div className={styles.button_wrapper}>
          <button className={styles.select_button}>show table</button>
          <button className={styles.num_button}>show answer</button>
        </div>
        <div>
          {generateGrid(table.tableUpto).map((t) => (
            <div>
              <span>{table.selectedNumber}</span>
              <span>X</span>
              <span>{t}</span>
              <span>=</span>
              <span>{table.selectedNumber * t}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Results;
