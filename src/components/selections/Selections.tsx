import React, { useContext, useState } from "react";
import { AppContext } from "../../state/context";
import styles from "../styles/selections.module.scss";
import Numbers from "../landing/Numbers";

const Selections = () => {
  const [isPadOpen, setIsPadOpen] = useState(false);

  const { state } = useContext(AppContext);

  return <section className={styles.select_container}></section>;
};

export default Selections;
