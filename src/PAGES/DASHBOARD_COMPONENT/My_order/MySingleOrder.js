import React, { useEffect, useState } from "react";

const MySingleOrder = ({ product_Id }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${product_Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [product_Id]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{ width: "90px", borderRadius: "8px" }}
          src={product.img}
          alt=""
        />
      </div>
      <h4 style={{ margin: "10px" }}>{product.name}</h4>
      <span>price: ${product.price}</span>
    </div>
  );
};

export default MySingleOrder;
