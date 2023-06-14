import React from "react";
import styles from "./index.module.scss";
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
