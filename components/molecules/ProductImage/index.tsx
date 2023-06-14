import React from "react";
import Image from "next/image";
import Text from "../../atoms/Text";
import styles from "./index.module.scss";

interface ProductImageProps {
  imageUrl: string;
  productName: string;
  price: string;
  containerStyle?: React.CSSProperties;
}

const ProductImage = ({
  imageUrl,
  productName,
  price,
  containerStyle = { backgroundColor: "#171717" },
}: ProductImageProps) => {
  return (
    <div className={styles["product-image-container"]} style={containerStyle}>
      <div className={styles["text-box"]}>
        <Text variant="h3" className={`${styles["text"]} ${styles["text-h3"]}`}>
          {productName}
        </Text>
        <Text className={`${styles["text"]} ${styles["text-p"]}`}>
          ${price} USD
        </Text>
      </div>
      <Image
        src={imageUrl}
        alt="Product Image"
        className={styles["product-image"]}
        width={540}
        height={540}
      ></Image>
    </div>
  );
};

export default ProductImage;
