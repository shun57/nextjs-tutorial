import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "./index.module.scss";
import Button from "../../atoms/Button";
import SearchInput from "../SearchInput";
import Link from "next/link";

interface HamburgerMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <div className={`${styles["menu"]} ${isVisible ? styles["show"] : ""}`}>
      <div>
        <Button className={styles["close-btn"]} onClick={onClose}>
          <RxCross1 className={styles["close-icon"]} />
        </Button>
      </div>
      <SearchInput />
      <ul>
        <li className={styles["navbarItem"]}>
          <Link href="/">All</Link>
        </li>
        <li className={styles["navbarItem"]}>
          <Link href="/">Shirts</Link>
        </li>
        <li className={styles["navbarItem"]}>
          <Link href="/">Stickers</Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
