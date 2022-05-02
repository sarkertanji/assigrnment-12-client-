import React, { useEffect, useState } from "react";
import "./productsHome.css";
import HomePageSingleProduct from "../singleProduct/HomePageSingleProduct";

const ProductsForHomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://whispering-sands-47045.herokuapp.com/products?home=home`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products-container">
      <h1>home page products</h1>
      <div className="all-products">
        {products.map((product) => (
          <HomePageSingleProduct
            key={product._id}
            product={product}
          ></HomePageSingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductsForHomePage;
