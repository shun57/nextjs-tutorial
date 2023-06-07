import React from "react";
import styles from "./index.module.css";
import ProductImage from "../../molecules/ProductImage";
import Link from "next/link";

const MainProducts = () => {
  const leftContainerStyles: React.CSSProperties = {
    backgroundColor: "#7928ca",
  };
  const rightBottomContainerStyles: React.CSSProperties = {
    backgroundColor: "#ff0080",
  };

  return (
    <section>
      <div className={styles["section-left"]}>
        <Link href={"/"}>
          <ProductImage
            imageUrl="/images/t-shirt-color-beige.avif"
            productName="Acme T-Shirt"
            price="20.00"
            containerStyle={leftContainerStyles}
          />
        </Link>
      </div>
      <div className={styles["section-right-top"]}>
        <Link href={"/"}>
          <ProductImage
            imageUrl="/images/cup-black.avif"
            productName="Acme Cup"
            price="15.00"
          />
        </Link>
      </div>
      <div className={styles["section-right-bottom"]}>
        <Link href={"/"}>
          <ProductImage
            imageUrl="/images/sticker-rainbow.avif"
            productName="Acme Rainbow Sticker"
            price="4.00"
            containerStyle={rightBottomContainerStyles}
          />
        </Link>
      </div>
    </section>
  );
};

export default MainProducts;
