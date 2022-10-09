import { useContext, useState } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/interactions.module.scss";

const Selections = () => {
  const [isPadOpen, setIsPadOpen] = useState(false);

  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <section className={styles.select_container}>
      <span>{table.selectedNumber}</span>
      <span>{table.tableUpto}</span>
    </section>
  );
};

export default Selections;
