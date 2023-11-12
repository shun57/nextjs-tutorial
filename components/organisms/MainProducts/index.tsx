import React from "react";
import styles from "./index.module.css";
import ProductImage from "../../molecules/ProductImage";
import Link from "next/link";

interface ProductProps {
  link: string;
  imageUrl: string;
  name: string;
  price: string;
}

const MainProducts: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  const leftContainerStyles: React.CSSProperties = {
    backgroundColor: "#7928ca",
  };
  const rightBottomContainerStyles: React.CSSProperties = {
    backgroundColor: "#ff0080",
  };

  return (
    <section className={styles["product-section"]}>
      <div className={styles["section-left"]}>
        <Link href={products[0].link}>
          <ProductImage
            imageUrl={products[0].imageUrl}
            productName={products[0].name}
            price={products[0].price}
            containerStyle={leftContainerStyles}
          />
        </Link>
      </div>
      <div className={styles["section-right-top"]}>
        <Link href={"/"}>
          <ProductImage
            imageUrl={products[1].imageUrl}
            productName={products[1].name}
            price={products[1].price}
          />
        </Link>
      </div>
      <div className={styles["section-right-bottom"]}>
        <Link href={"/"}>
          <ProductImage
            imageUrl={products[2].imageUrl}
            productName={products[2].name}
            price={products[2].price}
            containerStyle={rightBottomContainerStyles}
          />
        </Link>
      </div>
    </section>
  );
};

export default MainProducts;
