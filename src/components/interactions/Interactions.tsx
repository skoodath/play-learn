import React, { useContext, useState } from "react";
import styles from "../styles/interactions.module.scss";
import { generateGrid } from "../../utils/generateArray";
import { AppContext } from "../../state/context";
import { addToAnswer } from "../../state/actions";
import PromptResult from "./PromptResult";

const Interactions = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedAnswers } = state;
  const [showPrompt, setShowPrompt] = useState(false);

  const handler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    let val: number | string | undefined = target.dataset.value;

    if (val && state.selectedAnswers.size < 12 && isNaN(+val) === false) {
      dispatch(addToAnswer(+val));
    } else {
      setShowPrompt(true);
    }
  };

  return (
    <>
      <section className={styles.grid_container} onClick={handler}>
        {state.selectedNumber > 0 &&
          generateGrid(150).map((cell, i) => {
            return (
              <div
                key={cell}
                className={`${styles.grid_item} ${
                  selectedAnswers.has(cell) ? styles.selected : ""
                }`}
                data-value={cell}
              >
                {cell}
              </div>
            );
          })}
      </section>
      {showPrompt && <PromptResult setShowPrompt={setShowPrompt} />}
    </>
  );
};

export default Interactions;
