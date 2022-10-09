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
      {welcome && <Welcome setWelcome={setWelcome} setModal={setModal} />}
      {modal && <Numbers setModal={setModal} />}
      {table.selectedNumber <= 0 && <ZeroMessage />}
    </header>
  );
};

export default Landing;
