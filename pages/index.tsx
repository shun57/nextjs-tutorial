import HomeTemplate from "./templates/HomeTemplate";

export default function Home() {
  const products = [
    {
      link: "/",
      imageUrl: "/images/t-shirt-color-beige.avif",
      name: "Acme T-Shirt",
      price: "20.00",
    },
    {
      link: "/",
      imageUrl: "/images/cup-black.avif",
      name: "Acme Cup",
      price: "15.00",
    },
    {
      link: "/",
      imageUrl: "/images/sticker-rainbow.avif",
      name: "Acme Rainbow Sticker",
      price: "4.00",
    },
  ];

  const categories = [
    {
      link: "/",
      imageUrl: "/images/mug-1.avif",
      name: "Acme Mug",
    },
    {
      link: "/",
      imageUrl: "/images/hoodie-1.avif",
      name: "Acme Hoodie",
    },
    {
      link: "/",
      imageUrl: "/images/baby-onesie-beige-1.avif",
      name: "Acme Baby Onesie",
    },
    {
      link: "/",
      imageUrl: "/images/baby-cap-black.avif",
      name: "Acme Baby Cap",
    },
  ];

  return <HomeTemplate products={products} categories={categories} />;
}
