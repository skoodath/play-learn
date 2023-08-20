import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "../styles/interactions.module.scss";
import { AppContext } from "../../state/appContext";
import _ from "lodash";

import {
  InteractionContext,
  InterContextProvider,
} from "./context/InteractionContext";
import SelectNumber from "./SelectNumber";
import { FaCaretRight, FaCheck } from "react-icons/fa";

const styleProps = {
  unSelected: `${styles.grid_item}`,
  selected: `${styles.grid_item} ${styles.selected}`,
  finished: `${styles.grid_item} ${styles.right}`,
};

let sound = new Audio("/assets/gamesound.wav");

const Interactions = () => {
  //const [openTable, setOpenTable] = useState(false);
  const [numberSelected, setNumberSelected] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const [answerValue, setAnswerValue] = useState<number>(0);
  const [tries, setTries] = useState(5);
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [correctAnswers, setCorrectAnswer] = useState<
    { [key: string]: number }[]
  >([]);
  //const [multiplyBy, setMultiplyBy] = useState<number>(1);

  const handleAnswerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAnswerRight(false);
    setAnswerValue(+e.target?.value);
  };

  useEffect(() => {
    const answerKeyJSON = sessionStorage.getItem("answerkey");
    const answerKeyObject = answerKeyJSON && JSON.parse(answerKeyJSON);
    let answerObject: { [key: string]: number } = {};
    for (let key in answerKeyObject) {
      if (answerKeyObject[key] === answerValue) {
        setIsAnswerRight(true);
        answerObject = { [key]: answerValue };
      }
    }
    for (let val of correctAnswers) {
      if (val && _.isEqual(val, answerObject)) {
        console.log(val, answerObject);
      }
      setCorrectAnswer([...correctAnswers, answerObject]);
    }
  }, [answerValue]);

  console.log(correctAnswers);

  let multiple = "1";
  const handleNextEquation = () => {
    if (correctAnswers.length <= 0) return;
    setAnswerValue(0);
    multiple += 1;
  };

  console.log(correctAnswers);

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
          <div>
            <div>You are doing multiplication table of {selectedNumber}</div>
            <div className={styles.answer_container}>
              <span>{selectedNumber}</span> X <span>{multiple}</span> ={" "}
              <input
                type="text"
                name="answer"
                maxLength={3}
                className={styles.answer_field}
                onChange={(e) => handleAnswerValue(e)}
                value={answerValue > 0 ? answerValue?.toString() : ""}
              />
              {isAnswerRight ? "🙂" : "☹️"}
              <span onClick={handleNextEquation}>Next</span> <FaCaretRight />
            </div>
            <div>
              {correctAnswers.map((correctAnswer) => (
                <p></p>
              ))}
            </div>
          </div>
        )}
      </InterContextProvider>
    </section>
  );
};

export default Interactions;
