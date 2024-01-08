import React, { useEffect, useState } from "react";
import styles from "../styles/interactions.module.scss";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

type Props = {
  setSelectedNumber: React.Dispatch<React.SetStateAction<number>>;
  setNumberSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
const standardMultiples = Array.from(Array(51).keys()).slice(1);

const SelectNumber = ({ setSelectedNumber, setNumberSelected }: Props) => {
  const [numberList, setNumberList] = useState<number[]>([1, 2, 3, 4, 5]);
  const [viewPort, setViewPort] = useState(0);

  useEffect(() => {
    setViewPort(document.documentElement.clientWidth || window.innerWidth);
    if (viewPort < 768) {
      setNumberList([1, 2, 3]);
    } else {
      setNumberList([1, 2, 3, 4, 5]);
    }
    setNumberList;
  }, []);

  const disablePrevious = numberList[0] === 1;
  const disableNext = numberList[numberList.length - 1] === 50;

  const getAnswerKey = (val: number) => {
    return standardMultiples.reduce((o, k) => ({ ...o, [k]: val * k }), {});
  };

  useEffect(() => {
    sessionStorage.removeItem("answerkey");
  }, []);

  const handleNumberSelect = (val: number) => {
    setSelectedNumber(val);
    setNumberSelected(true);
    const answerKey = getAnswerKey(val);
    sessionStorage.setItem("answerkey", JSON.stringify(answerKey));
  };

  return (
    <div className={styles.grid_container}>
      <button
        className={
          disablePrevious
            ? [styles.grid_nav, styles.grid_nav__disabled].join(" ")
            : styles.grid_nav
        }
        onClick={() =>
          setNumberList((prevList) => prevList.map((num) => num - 5))
        }
        disabled={disablePrevious}
        data-name="prev"
      >
        <FaCaretLeft /> {viewPort > 768 && <span>Previous</span>}
      </button>
      <div style={{ display: "flex", gap: "1rem" }}>
        {numberList.map((number) => (
          <div
            key={number}
            className={styles.grid_item}
            onClick={() => handleNumberSelect(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <button
        className={
          disableNext
            ? [styles.grid_nav, styles.grid_nav__disabled].join(" ")
            : styles.grid_nav
        }
        onClick={() =>
          setNumberList((prevList) => prevList.map((num) => num + 5))
        }
        disabled={disableNext}
        data-name="next"
      >
        {viewPort > 768 && <span>Next</span>} <FaCaretRight />
      </button>
    </div>
  );
};

export default SelectNumber;
