import HomeTemplate from "./templates/HomeTemplate";
import Head from "next/head";

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

  return (
    <>
      <Head>
        <title>Acme Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeTemplate products={products} categories={categories} />
    </>
  );
}
