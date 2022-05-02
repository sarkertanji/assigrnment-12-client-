import React, { useEffect, useState } from "react";
import AllProducts from "../ALL_PRODUCTS_LOAD/AllProducts";

const Explor = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products-container">
      <h1> EXPLOR OUR</h1>
      <h3> ALL COLLECTION</h3>
      <div className="all-products">
        {products.map((product) => (
          <AllProducts key={product.id} product={product}></AllProducts>
        ))}
      </div>
    </div>
  );
};

export default Explor;
