import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import CategoryImage from "../../molecules/CategoryImage";
import Link from "next/link";

interface CategoryProps {
  link: string;
  imageUrl: string;
  name: string;
}

const Carousel: React.FC<{ categories: CategoryProps[] }> = ({
  categories,
}) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        {categories.map((item, index) => (
          <Link key={index} href={item.link} className={styles.slide}>
            <CategoryImage imageUrl={item.imageUrl} categoryName={item.name} />
          </Link>
        ))}
      </div>
      <div className={styles.slideContainer}>
        {categories.map((item, index) => (
          <Link key={index} href={item.link} className={styles.slide}>
            <CategoryImage imageUrl={item.imageUrl} categoryName={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// <Link href={"/"} className={styles.slide}>
//   {" "}
//   <CategoryImage
//     imageUrl="/images/mug-1.avif"
//     categoryName="Acme Mug"
//   />
// </Link>
// <Link href={"/"} className={styles.slide}>
//   <CategoryImage
//     imageUrl="/images/hoodie-1.avif"
//     categoryName="Acme Hoodie"
//   />
// </Link>
// <Link href={"/"} className={styles.slide}>
//   <CategoryImage
//     imageUrl="/images/baby-onesie-beige-1.avif"
//     categoryName="Acme Baby Onesie"
//   />
// </Link>
