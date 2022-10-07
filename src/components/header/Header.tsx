import { generateGrid } from "../../utils/createBoard";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.app_header}>
      <h1 className={styles.app_title}>math is fun</h1>
      <button
        className={styles.check_answer}
        onClick={() => {
          let answers = generateGrid(12).map((times) => selectedNumber * times);
          setCorrectAnswers(answers);
        }}
      >
        check answer
      </button>
    </header>
  );
};

export default Header;
