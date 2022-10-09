import React, { useContext, useState } from "react";
import styles from "../styles/interactions.module.scss";
import { generateGrid } from "../../utils/generateArray";
import { AppContext } from "../../state/context";
import { updateAnswer } from "../../state/actions";
import PromptResult from "./PromptResult";
import Selections from "./Selections";

const Interactions = () => {
  const { state, dispatch } = useContext(AppContext);
  const { table, selectedAnswers, correctAnswer } = state;
  const [showPrompt, setShowPrompt] = useState(false);

  const handler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    let val: number | string | undefined = target.dataset.value;

    if (val && selectedAnswers.size < 12 && isNaN(+val) === false) {
      dispatch(updateAnswer(+val));
    } else {
      setShowPrompt(true);
    }
  };

  const styleAnswers = (val: number) => {
    if (correctAnswer.includes(val)) {
      return `${styles.grid_item} ${styles.right}`;
    } else {
      return `${styles.grid_item}`;
    }
  };

  return (
    <>
      <section className={styles.container} onClick={handler}>
        {table.selectedNumber > 0 && <Selections />}
        {table.selectedNumber > 0 && (
          <div className={styles.grid_container}>
            {generateGrid(table.tableUpto * 12).map((cell, i) => {
              return (
                <div
                  key={cell}
                  className={styleAnswers(cell)}
                  data-value={cell}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        )}
      </section>
      {showPrompt && <PromptResult setShowPrompt={setShowPrompt} />}
    </>
  );
};

export default Interactions;
