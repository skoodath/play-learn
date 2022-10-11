import { useContext, useState } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/header.module.scss";
import Numbers from "./Numbers";
import Welcome from "./Welcome";
import ZeroMessage from "./ZeroMessage";

const Landing = () => {
  const [welcome, setWelcome] = useState(true);
  const [modal, setModal] = useState(false);
  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <header className={styles.app_header}>
      {welcome && (
        <Welcome setWelcome={setWelcome} setModal={setModal} modal={modal} />
      )}
      <Numbers setModal={setModal} modal={modal} setWelcome={setWelcome} />
      {!modal &&
        !welcome &&
        (table.selectedNumber <= 0 || table.tableUpto <= 0) && (
          <ZeroMessage setModal={setModal} />
        )}
    </header>
  );
};

export default Landing;
