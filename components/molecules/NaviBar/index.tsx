import React from "react";
import Link from "next/link";
import Logo from "../../atoms/Logo";
import styles from "./index.module.css";

const NaviBar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbarList"]}>
        <li className={styles["navbarItem"]}>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li className={styles["navbarItem"]}>
          <Link href="/" className={styles["navbarLink"]}>
            All
          </Link>
        </li>
        <li className={styles["navbarItem"]}>
          <Link href="/" className={styles["navbarLink"]}>
            Shirts
          </Link>
        </li>
        <li className={styles["navbarItem"]}>
          <Link href="/" className={styles["navbarLink"]}>
            Stickers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NaviBar;
