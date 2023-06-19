import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

interface LogoProps {
  text?: string;
}

const Logo = ({ text }: LogoProps) => {
  return (
    <div className={styles["centered-container"]}>
      <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      {text && <span className={styles["logo-text"]}>{text}</span>}
    </div>
  );
};

export default Logo;
