import React from "react";
import Image from "next/image";
import Link from "next/link";
import OverlayBox from "../../atoms/OrverlayBox";
import styles from "./index.module.css";

interface CategoryImageProps {
  imageUrl: string;
  categoryName: string;
}

const CategoryImage = ({ imageUrl, categoryName }: CategoryImageProps) => {
  return (
    <Link href="/">
      <div className={styles["category-image-container"]}>
        <Image
          fill
          src={imageUrl}
          alt="Category Image"
          className={styles["category-image"]}
        />
        <OverlayBox className={styles["overlay-box"]}>
          {categoryName}
        </OverlayBox>
      </div>
    </Link>
  );
};

export default CategoryImage;
