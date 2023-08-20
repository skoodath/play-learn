import { useContext, useState } from "react";
import { AppContext } from "../../state/appContext";
import styles from "../styles/header.module.scss";
import Welcome from "./Welcome";
import ZeroMessage from "./ZeroMessage";

const Landing = () => {
  const [modal, setModal] = useState(false);
  const { state } = useContext(AppContext);
  const { welcome, table, currentUser } = state;

  return (
    <header className={styles.app_header}>
      {welcome && <Welcome setModal={setModal} modal={modal} />}
      {!modal &&
        !welcome &&
        currentUser !== "" &&
        (table.selectedNumber <= 0 || table.tableUpto <= 0) && (
          <ZeroMessage setModal={setModal} />
        )}
    </header>
  );
};

export default Landing;
