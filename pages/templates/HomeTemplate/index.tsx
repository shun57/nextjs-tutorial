import React from "react";
import Header from "../../../components/organisms/Header";
import MainProducts from "../../../components/organisms/MainProducts";
import Carousel from "../../../components/organisms/Carousel";
import Footer from "../../../components/organisms/Footer";

const HomeTemplate = ({ products, categories }) => {
  return (
    <div>
      <Header />
      <MainProducts products={products} />
      <Carousel categories={categories} />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
