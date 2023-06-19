import React from "react";
import Image from "next/image";
import OverlayBox from "../../atoms/OrverlayBox";
import styles from "./index.module.css";

interface CategoryImageProps {
  imageUrl: string;
  categoryName: string;
  width?: number;
  height?: number;
}

const CategoryImage = ({
  imageUrl,
  categoryName,
  width = 368,
  height = 237,
}: CategoryImageProps) => {
  return (
    <div className={styles["category-image-container"]}>
      <Image
        src={imageUrl}
        alt="Category Image"
        className={styles["category-image"]}
        width={width}
        height={height}
      />
      <OverlayBox className={styles["overlay-box"]}>{categoryName}</OverlayBox>
    </div>
  );
};

export default CategoryImage;
