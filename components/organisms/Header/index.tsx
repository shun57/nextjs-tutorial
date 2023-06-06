import React from "react";
import NaviBar from "../../molecules/NaviBar";
import SearchInput from "../../molecules/SearchInput";
import { FiShoppingBag } from "react-icons/fi";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["left"]}>
        <NaviBar />
      </div>
      <div className={styles["center"]}>
        <SearchInput />
      </div>
      <div className={styles["right"]}>
        <FiShoppingBag className={styles["shpping-icon"]} />
      </div>
    </header>
  );
};

export default Header;
