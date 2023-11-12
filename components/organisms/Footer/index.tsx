import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import styles from "./index.module.css";
import Text from "../../atoms/Text";
import Logo from "../../atoms/Logo";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-column"]}>
          <div className={styles["left"]}>
            <Link href={"/"} className={styles["logo"]}>
              <Logo text="Acme Store" />
            </Link>
          </div>
          <nav className={styles["center"]}>
            <ul className={styles["footer-list"]}>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  Shipping & Return Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className={styles["navbarLink"]}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["right"]}>
            <Link href={"/"}>
              <BsGithub className={styles["github-icon"]} />
            </Link>
          </div>
        </div>
        <div className={styles["footer-copy"]}>
          <Text>© 2023 Acme Store. All rights reserved.</Text>
          <div className={styles["footer-created"]}>
            <span>Created by</span>
            <Link href={"/"}>
              <Image
                src={"/vercel.svg"}
                className={styles["vercel-logo"]}
                alt="Vercel Logo"
                width={106}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
