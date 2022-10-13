import { useContext, useState } from "react";
import { AppContext } from "../../state/appContext";
import styles from "../styles/interactions.module.scss";
import { useSwitch } from "../../utils/customHooks";
import { initialState } from "../../state/reducer";
import { resetAll, setWelcome } from "../../state/actions";
import { InteractionContext } from "./context/InteractionContext";

const styleOne = {
  fontSize: "1rem",
};

interface SelectionProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Selections = ({ currentIndex, setCurrentIndex }: SelectionProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { openTable, setOpenTable } = useContext(InteractionContext);
  const { table } = state;
  const showView = useSwitch();

  const resetState = () => {
    setCurrentIndex(1);
    dispatch(setWelcome(true));
    dispatch(resetAll(initialState));
  };

  const inProgress = (
    <div className={styles.display_container}>
      <span style={styleOne}>Let's do</span>
      <span>{table.selectedNumber}'s table</span>
      <span style={styleOne}>from</span>
      <span> 1 to {table.tableUpto}</span>
    </div>
  );

  const completed = (
    <div className={styles.button_wrapper}>
      <button
        className={styles.show_table_btn}
        onClick={() => setOpenTable(!openTable)}
      >
        show me {table.selectedNumber}'s table
      </button>
      <button className={styles.restart_btn} onClick={resetState}>
        Try again
      </button>
    </div>
  );

  return (
    <section className={styles.select_container}>
      <span className={styles.progress}>
        {table.selectedNumber} X {currentIndex} = ?
      </span>
      {showView ? inProgress : completed}
    </section>
  );
};

export default Selections;
