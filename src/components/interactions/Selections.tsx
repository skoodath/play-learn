import { useContext } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/interactions.module.scss";

const styleOne = {
  fontSize: "1rem",
};

const Selections = () => {
  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <section className={styles.select_container}>
      <div className={styles.display_container}>
        <span>Let's</span>
        <span style={styleOne}>multiply</span>
        <span>{table.selectedNumber}</span>
        <span style={styleOne}>from</span>
        <span> 1 to {table.tableUpto}</span>
      </div>
    </section>
  );
};

export default Selections;
