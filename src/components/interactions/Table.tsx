import React, { useContext } from "react";
import CloseButton from "../../common/buttons/CloseButton";
import { AppContext } from "../../state/appContext";
import { generateGrid } from "../../utils/generateArray";
import styles from "../styles/interactions.module.scss";
import { InteractionContext } from "./context/InteractionContext";

const Table = () => {
  const { state } = useContext(AppContext);
  const { openTable, setOpenTable } = useContext(InteractionContext);
  const { table } = state;

  return (
    <section
      className={`${styles.table_wrapper} ${
        openTable ? styles.table_visible : styles.table_hidden
      }`}
    >
      <section className={`${styles.table_card}`}>
        <CloseButton setOpenModal={setOpenTable} openModal={openTable} />
        <div className={styles.table_layout}>
          {generateGrid(table.tableUpto).map((t) => (
            <div key={t} className={styles.table_row}>
              <span>{table.selectedNumber}</span>
              <span style={{ fontSize: "0.9rem" }}>X</span>
              <span>{t}</span>
              <span style={{ fontSize: "0.9rem" }}>=</span>
              <span>{table.selectedNumber * t}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Table;
