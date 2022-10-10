import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../state/context";
import { generateGrid } from "../../utils/generateArray";
import styles from "../styles/interactions.module.scss";

interface SelectProps {
  currentIndex: number;
}

const Selections = ({ currentIndex }: SelectProps) => {
  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <section className={styles.select_container}>
      <div className={styles.display_container}>
        <span className={styles.number_btn}>{table.selectedNumber}</span>
        <span>taken </span>
        <span className={styles.number_btn}>
          {currentIndex <= table.tableUpto ? currentIndex : ""}
        </span>
        <span>{currentIndex === 1 ? "time" : "times"}</span>
      </div>
    </section>
  );
};

export default Selections;
