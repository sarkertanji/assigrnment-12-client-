import React, { useEffect, useState } from "react";

const SingleOrders = ({ product_Id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/products/${product_Id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product_Id]);
  return (
    <div>
      <span>Product_Model:{product.name} </span>
      <br />
      <span>Price: ${product.price}</span>
      <br />
      <span>Rating: {product.rating}</span>
      <br />
    </div>
  );
};

export default SingleOrders;
