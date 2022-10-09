import { useState } from "react";
import styles from "../styles/header.module.scss";
import Numbers from "./Numbers";
import Welcome from "./Welcome";

const Landing = () => {
  const [welcome, setWelcome] = useState(true);

  return (
    <header className={styles.app_header}>
      {welcome && <Welcome setWelcome={setWelcome} />}
      <Numbers />
    </header>
  );
};

export default Landing;
