import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/interactions.module.scss";
import { generateGrid } from "../../utils/generateArray";
import { AppContext } from "../../state/context";
import { updateAnswer } from "../../state/actions";
import PromptResult from "./PromptResult";
import Selections from "./Selections";

const styleProps = {
  unSelected: `${styles.grid_item}`,
  selected: `${styles.grid_item} ${styles.selected}`,
  finished: `${styles.grid_item} ${styles.right}`,
};

const Interactions = () => {
  const { state, dispatch } = useContext(AppContext);
  const { table, selectedAnswers, correctAnswer } = state;
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(false);

  console.log(correctAnswer);

  const styleAnswers = (val: number) => {
    if (selectedAnswers.has(val)) {
      return styleProps.selected;
    } else {
      return styleProps.unSelected;
    }
  };

  const styleAnswerDone = (val: number) => {
    if (correctAnswer.includes(val)) {
      return styleProps.finished;
    } else if (selectedAnswers.has(val)) {
      return styleProps.selected;
    } else {
      return styleProps.unSelected;
    }
  };

  console.log(selectedAnswers.size, table.tableUpto);
  const handler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    let val: number | string | undefined = target.dataset.value;

    if (
      val &&
      selectedAnswers.size < table.tableUpto &&
      isNaN(+val) === false
    ) {
      dispatch(updateAnswer(+val));
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowPrompt(true);
    }
  };

  return (
    <>
      <section className={styles.container} onClick={handler}>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "1rem",
            backgroundColor: "green",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Refresh Page
        </button>
        {table.selectedNumber > 0 && <Selections currentIndex={currentIndex} />}
        {table.selectedNumber > 0 && (
          <div className={styles.grid_container}>
            {generateGrid(table.tableUpto * 15).map((cell, i) => {
              return (
                <button
                  key={cell}
                  className={
                    selectedAnswers.size === table.tableUpto
                      ? styleAnswerDone(cell)
                      : styleAnswers(cell)
                  }
                  data-value={cell}
                  disabled={selectedAnswers.size === table.tableUpto}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        )}
      </section>
      {/* {showPrompt && <PromptResult setShowPrompt={setShowPrompt} />} */}
    </>
  );
};

export default Interactions;
