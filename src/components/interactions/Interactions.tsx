import { ChangeEvent, useEffect, useState } from "react";
import styles from "../styles/interactions.module.scss";
import _ from "lodash";

import { InterContextProvider } from "./context/InteractionContext";
import SelectNumber from "./SelectNumber";
import { FaCaretRight } from "react-icons/fa";
import Guide from "./Guide";

const styleProps = {
  unSelected: `${styles.grid_item}`,
  selected: `${styles.grid_item} ${styles.selected}`,
  finished: `${styles.grid_item} ${styles.right}`,
};

let sound = new Audio("/assets/gamesound.wav");

type AnswerType = {
  [key: string]: number;
};

const Interactions = () => {
  const [numberSelected, setNumberSelected] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const [answerValue, setAnswerValue] = useState("");
  const [emojis, setEmojis] = useState<string[]>([]);
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [correctAnswers, setCorrectAnswer] = useState<AnswerType[]>([]);
  const [multiple, setMultiple] = useState<number>(1);
  const [clue, setClue] = useState(false);

  const handleAnswerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerValue(e.target?.value);
  };

  useEffect(() => {
    if (sessionStorage.getItem("answerkey") === undefined) return undefined;
    else {
      const answerKeyJSON = sessionStorage.getItem("answerkey");
      const answerKeyObject = answerKeyJSON && JSON.parse(answerKeyJSON);
      const answerValueNumber = +answerValue;
      if (answerKeyObject && answerKeyObject[multiple] === answerValueNumber) {
        setIsAnswerRight(true);
      } else {
        setIsAnswerRight(false);
      }
    }
  }, [multiple, answerValue]);

  const handleNextEquation = () => {
    const answerValueNumber = +answerValue;
    if (correctAnswers.length <= 0) {
      setCorrectAnswer([{ [multiple]: answerValueNumber }]);
    } else {
      for (let val of correctAnswers) {
        for (let key in val) {
          if (key === multiple.toString()) return;
          else {
            setCorrectAnswer([
              ...correctAnswers,
              { [multiple.toString()]: answerValueNumber },
            ]);
          }
        }
      }
    }
    setEmojis([...emojis, "🍧"]);
    setAnswerValue("");
    setMultiple(multiple + 1);
    setClue(false);
  };

  const handleClue = () => {
    setClue(true);
  };

  const handleRestart = () => {
    setAnswerValue("");
    setNumberSelected(false);
  };

  return (
    <section className={styles.container}>
      <InterContextProvider>
        {!numberSelected && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div>Choose a number</div>
            <SelectNumber
              setSelectedNumber={setSelectedNumber}
              setNumberSelected={setNumberSelected}
            />
          </div>
        )}
        {numberSelected && (
          <>
            <div className={styles.information}>
              <span>
                You are doing multiplication table of {selectedNumber}
              </span>
              <button className={styles.button_restart} onClick={handleRestart}>
                Start again
              </button>
            </div>
            <div className={styles.action_wrapper}>
              <div className={styles.answer_container}>
                <div className={styles.answer_answerarea}>
                  <span>{selectedNumber}</span> X <span>{multiple}</span> ={" "}
                  <input
                    type="text"
                    name="answer"
                    maxLength={3}
                    className={styles.answer_field}
                    onChange={(e) => handleAnswerValue(e)}
                    value={+answerValue > 0 ? answerValue?.toString() : ""}
                  />
                  {isAnswerRight ? "🙂" : "?"}
                  <button
                    disabled={!isAnswerRight}
                    className={
                      isAnswerRight
                        ? styles.equation_next_button
                        : [
                            styles.equation_next_button,
                            styles.button_disabled,
                          ].join(" ")
                    }
                    onClick={handleNextEquation}
                  >
                    <span>Next</span> <FaCaretRight />
                  </button>
                </div>
                <div className={styles.answer_answerclue}>
                  <button
                    className={styles.answer_helpbutton}
                    onClick={handleClue}
                  >
                    I need help
                  </button>
                  {clue && (
                    <div className={styles.answer_clue_content}>
                      <span
                        className={styles.close_clue}
                        onClick={() => setClue(false)}
                      >
                        close x
                      </span>
                      <p className={styles.answer_help_text}>
                        Count the number of 🍧below and that will be the answer
                      </p>
                      <Guide
                        multiple={multiple}
                        selectedNumber={selectedNumber}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.answer_display}>
                {correctAnswers.length > 0 &&
                  correctAnswers.map((correctAnswer, i) => {
                    const key = Object.keys(correctAnswer).join("");

                    const displayValue = `${selectedNumber} X ${Object.keys(
                      correctAnswer
                    )} = ${Object.values(correctAnswer)} `;
                    return <p key={key}>{displayValue}</p>;
                  })}
              </div>
            </div>
          </>
        )}
      </InterContextProvider>
    </section>
  );
};

export default Interactions;
