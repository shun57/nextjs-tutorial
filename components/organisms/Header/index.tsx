import React, { useState } from "react";
import NaviBar from "../../molecules/NaviBar";
import SearchInput from "../../molecules/SearchInput";
import { FiShoppingBag } from "react-icons/fi";
import styles from "./index.module.css";
import Button from "../../atoms/Button";
import CartArea from "../../molecules/CartArea";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartToggle = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["left"]}>
          <NaviBar />
        </div>
        <div className={styles["center"]}>
          <SearchInput />
        </div>
        <div className={styles["right"]}>
          <Button className={styles["cart-button"]} onClick={handleCartToggle}>
            <FiShoppingBag className={styles["shpping-icon"]} />
          </Button>
        </div>
      </header>
      <CartArea isVisible={isCartVisible} onClose={handleCartToggle} />
    </>
  );
};

export default Header;
