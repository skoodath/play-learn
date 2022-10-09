import styles from "../styles/header.module.scss";

const ZeroMessage = () => {
  return (
    <div className={styles.zero_message}>
      <div className={styles.para}>
        <span>Oh ho!</span>
        <div>
          <span>Zero</span> <span>X</span> <span>Zero</span> <span>=</span>{" "}
          <span>Zero</span>
        </div>
      </div>
      <button className={styles.goback_button}>
        Let's try a different number
      </button>
    </div>
  );
};

export default ZeroMessage;
