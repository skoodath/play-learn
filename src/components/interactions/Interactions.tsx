import React, { useContext, useState } from "react";
import styles from "../styles/interactions.module.scss";
import { generateGrid } from "../../utils/generateArray";
import { AppContext } from "../../state/appContext";
import { updateAnswer } from "../../state/actions";
import Selections from "./Selections";
import Table from "./Table";
import {
  InteractionContext,
  InterContextProvider,
} from "./context/InteractionContext";

const styleProps = {
  unSelected: `${styles.grid_item}`,
  selected: `${styles.grid_item} ${styles.selected}`,
  finished: `${styles.grid_item} ${styles.right}`,
};

let sound = new Audio("/assets/gamesound.wav");

const Interactions = () => {
  //const [openTable, setOpenTable] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { table, selectedAnswers, correctAnswer } = state;
  const [currentIndex, setCurrentIndex] = useState(1);

  const styleAnswers = (val: number) => {
    if (selectedAnswers.includes(val)) {
      return styleProps.selected;
    } else {
      return styleProps.unSelected;
    }
  };

  const styleAnswerDone = (val: number) => {
    if (correctAnswer.includes(val)) {
      return styleProps.finished;
    } else if (selectedAnswers.includes(val)) {
      return styleProps.selected;
    } else {
      return styleProps.unSelected;
    }
  };

  const handler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    let val: number | string | undefined = target.dataset.value;

    if (
      val &&
      selectedAnswers.length < table.tableUpto &&
      isNaN(+val) === false
    ) {
      sound.play();
      dispatch(updateAnswer(+val));
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  let buttonState = (currentValue: number) => {
    return (
      selectedAnswers.includes(currentValue) ||
      selectedAnswers.length >= table.tableUpto
    );
  };

  return (
    <section className={styles.container}>
      <InterContextProvider>
        {table.selectedNumber > 0 && (
          <Selections
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        {table.selectedNumber > 0 && (
          <div className={styles.grid_container} onClick={handler}>
            {generateGrid(table.tableUpto * 15).map((cell, i) => {
              return (
                <button
                  key={cell}
                  className={
                    selectedAnswers.length === table.tableUpto
                      ? styleAnswerDone(cell)
                      : styleAnswers(cell)
                  }
                  data-value={cell}
                  disabled={buttonState(cell)}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        )}
        <Table />
      </InterContextProvider>
    </section>
  );
};

export default Interactions;
