import React from "react";
import Banner from "../banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import ProductsForHomePage from "../productHomePage/ProductsForHomePage";
import Reviews from "../reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductsForHomePage></ProductsForHomePage>
      <Reviews></Reviews>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
