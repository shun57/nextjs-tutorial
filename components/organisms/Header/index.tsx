import React, { useState } from "react";
import NaviBar from "../../molecules/NaviBar";
import SearchInput from "../../molecules/SearchInput";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./index.module.scss";
import Button from "../../atoms/Button";
import CartArea from "../../molecules/CartArea";
import Link from "next/link";
import Logo from "../../atoms/Logo";
import HamburgerMenu from "../../molecules/HamburgerMenu";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["left"]}>
          <div className={styles["navbar"]}>
            <NaviBar />
          </div>
          <Button onClick={handleToggleMenu} className={styles["hamburger"]}>
            <GiHamburgerMenu size={24} color="white" />
          </Button>
        </div>
        <div className={styles["center"]}>
          <div className={styles["searchInput"]}>
            <SearchInput />
          </div>
          <Link href="/" className={styles["logo"]}>
            <Logo />
          </Link>
        </div>
        <div className={styles["right"]}>
          <Button className={styles["cart-button"]} onClick={handleCartToggle}>
            <FiShoppingBag className={styles["shpping-icon"]} />
          </Button>
        </div>
      </header>
      <CartArea isVisible={isCartVisible} onClose={handleCartToggle} />
      <HamburgerMenu isVisible={isMenuOpen} onClose={handleToggleMenu} />
    </>
  );
};

export default Header;
