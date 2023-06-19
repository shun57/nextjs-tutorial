import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import styles from "./index.module.css";
import Button from "../../atoms/Button";

interface CartAreaProps {
  isVisible: boolean;
  onClose: () => void;
}

const CartArea: React.FC<CartAreaProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`${styles["cart-overlay"]} ${isVisible ? styles["show"] : ""}`}
    >
      <div
        className={`${styles["cart-area"]} ${isVisible ? styles["show"] : ""}`}
      >
        <div className={styles["cart-header"]}>
          <p>My Cart</p>
          <Button className={styles["cart-close-btn"]} onClick={onClose}>
            <RxCross1 className={styles["cart-close-icon"]} />
          </Button>
        </div>
        <div className={styles["cart-content"]}>
          <div className={styles["cart-icon"]}>
            <FiShoppingBag />
          </div>
          <p className={styles["cart-msg"]}>Your cart is empty.</p>
        </div>
      </div>
    </div>
  );
};

export default CartArea;
