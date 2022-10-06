import React, { useEffect, useRef, useState } from "react";
import { generateGrid } from "../../utils/createBoard";
import styles from "../styles/selections.module.scss";

const Selections = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<Array<number>>([]);

  const selectValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNumber(+event.target.value);
  };

  return (
    <section className={styles.select_container}>
      <div className={styles.dropdown_container}>
        <label className={styles.dropdown_label}>
          Pick a number
          <input
            type="number"
            min={1}
            max={20}
            value={selectedNumber}
            onChange={(e) => selectValue(e)}
          />
        </label>
        <span>Choose multiples of {selectedNumber}</span>
      </div>
      <button
        className={styles.check_answer}
        onClick={() => {
          let answers = generateGrid(12).map((times) => selectedNumber * times);
          setCorrectAnswers(answers);
          console.log(correctAnswers);
        }}
      >
        check answer
      </button>
    </section>
  );
};

export default Selections;
