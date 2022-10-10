import React, { useContext } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";

interface ZeroProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ZeroMessage = ({ setModal }: ZeroProps) => {
  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <div className={styles.zero_message}>
      <div className={styles.para}>
        <span>Oh ho!</span>
        <div>
          <span>{table.selectedNumber}</span> <span>X</span>{" "}
          <span>{table.tableUpto}</span> <span>=</span> <span>Zero</span>
        </div>
      </div>
      <button
        className={styles.goback_button}
        onClick={() => {
          setModal(true);
        }}
      >
        Let's try a different number
      </button>
    </div>
  );
};

export default ZeroMessage;
