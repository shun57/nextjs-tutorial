import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import CategoryImage from "../../molecules/CategoryImage";
import Link from "next/link";

const Carousel = ({}) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/baby-cap-black.avif"
            categoryName="Acme Baby Cap"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          {" "}
          <CategoryImage
            imageUrl="/images/mug-1.avif"
            categoryName="Acme Mug"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/hoodie-1.avif"
            categoryName="Acme Hoodie"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/baby-onesie-beige-1.avif"
            categoryName="Acme Baby Onesie"
          />
        </Link>
      </div>
      <div className={styles.slideContainer}>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/baby-cap-black.avif"
            categoryName="Acme Baby Cap"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          {" "}
          <CategoryImage
            imageUrl="/images/mug-1.avif"
            categoryName="Acme Mug"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/hoodie-1.avif"
            categoryName="Acme Hoodie"
          />
        </Link>
        <Link href={"/"} className={styles.slide}>
          <CategoryImage
            imageUrl="/images/baby-onesie-beige-1.avif"
            categoryName="Acme Baby Onesie"
          />
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
