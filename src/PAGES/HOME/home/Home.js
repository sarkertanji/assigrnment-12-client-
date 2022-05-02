import React from "react";
import Footer from "../../SHARED/footer/Footer";
import NavBar from "../../SHARED/navigation/NavBar";
import Banner from "../banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import ProductsForHomePage from "../productHomePage/ProductsForHomePage";
import Reviews from "../reviews/Reviews";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <ProductsForHomePage></ProductsForHomePage>
      <Reviews></Reviews>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
