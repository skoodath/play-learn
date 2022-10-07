import React, { useEffect } from "react";
import styles from "../styles/interactions.module.scss";
import { generateGrid } from "../../utils/createBoard";

const Interactions = () => {
  const handler = (event: React.MouseEvent<HTMLSpanElement>) => {
    console.log(event.target.innerText);
  };
  return (
    <section className={styles.grid_container} onClick={handler}>
      {generateGrid(150).map((cell) => (
        <span key={cell} className={styles.grid_item}>
          {cell}
        </span>
      ))}
    </section>
  );
};

export default Interactions;