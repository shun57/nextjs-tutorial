import React from "react";
import Header from "../../../components/organisms/Header";
import MainProducts from "../../../components/organisms/MainProducts";
import Carousel from "../../../components/organisms/Carousel";
import Footer from "../../../components/organisms/Footer";
import CookieConsentDialog from "../../../components/organisms/CookieConsentDialog";

const HomeTemplate = ({ products, categories }) => {
  return (
    <div>
      <Header />
      <MainProducts products={products} />
      <Carousel categories={categories} />
      <CookieConsentDialog />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
