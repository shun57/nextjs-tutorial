import React from "react";
import styles from "./index.module.scss";

interface CommonButtonProps {
  color: "red" | "blue" | "green";
  size: "small" | "medium" | "large";
  disabled: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const CommonButton: React.FC<CommonButtonProps> = (props) => {
  const { color, size, disabled, onClick, children } = props;
  const buttonClasses = `${styles.button} ${styles[size]} ${styles[color]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
