import React, { useContext, useState } from "react";
import { selectNumber } from "../../state/actions";
import { AppContext } from "../../state/context";
import styles from "../styles/selections.module.scss";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface NumberProps {
  isPadOpen: boolean;
  setIsPadOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Numbers = ({ isPadOpen, setIsPadOpen }: NumberProps) => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const { dispatch } = useContext(AppContext);

  const selectValue = (num: number) => {
    dispatch(selectNumber(num));
    setIsPadOpen(!isPadOpen);
  };
  return (
    <section
      className={`${styles.num_card} ${isPadOpen ? styles.show : styles.hide}`}
    >
      <ul className={styles.num_list}>
        {numbers.map((number) => (
          <li
            key={number}
            className={styles.num_item}
            onClick={() => selectValue(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <span
        className={styles.num_button}
        onClick={() => setIsPadOpen(!isPadOpen)}
      >
        Close
      </span>
    </section>
  );
};

export default Numbers;
