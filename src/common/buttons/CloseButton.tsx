import React from "react";
import styles from "../styles/button.module.scss";

interface ButtonProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

const CloseButton = ({ setOpenModal, openModal }: ButtonProps) => {
  return (
    <button
      className={styles.close_button}
      onClick={() => setOpenModal(!openModal)}
    >
      &times;
    </button>
  );
};

export default CloseButton;
