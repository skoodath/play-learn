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
        <span>Multiply {table.selectedNumber}</span>
        <span>from</span>
        <span> 1 to {table.tableUpto}</span>
      </div>
    </section>
  );
};

export default Selections;
