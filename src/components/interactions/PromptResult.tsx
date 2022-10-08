import React, { useContext, useState } from "react";
import { AppContext } from "../../state/context";
import { compareResults } from "../../utils/compareResults";
import styles from "../styles/interactions.module.scss";

interface PromptProps {
  setShowPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

const PromptResult = ({ setShowPrompt }: PromptProps) => {
  const { state } = useContext(AppContext);

  const { correctAnswer, selectedAnswers } = state;

  const checkResult = () => {
    let result = compareResults(correctAnswer, selectedAnswers);
    console.log(result);
  };

  return (
    <section className={styles.answer_prompt}>
      <button className={styles.check_answer} onClick={checkResult}>
        See Answers
      </button>
    </section>
  );
};

export default PromptResult;
