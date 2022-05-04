import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

const AddProductsAdmin = () => {
  const [products, setproducts] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updateproducts = { ...products };
    updateproducts[field] = value;
    setproducts(updateproducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://whispering-sands-47045.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("product add succesfully");
        }
      });
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <h1>Add Products Details</h1>
        </Grid>
        <Grid item md={12} xs={12}>
          <form onSubmit={handleSubmit}>
            <TextareaAutosize
              name="img"
              onBlur={handleOnBlur}
              placeholder="img url"
              style={{ width: 200 }}
            />
            <br />
            <TextareaAutosize
              name="name"
              placeholder="Product name"
              onBlur={handleOnBlur}
              style={{ width: 200 }}
            />
            <br />
            <TextareaAutosize
              name="price"
              placeholder="price"
              onBlur={handleOnBlur}
              style={{ width: 200 }}
            />
            <br />
            <TextareaAutosize
              name="rating"
              placeholder="rating"
              onBlur={handleOnBlur}
              style={{ width: 200 }}
            />
            <br />
            <TextareaAutosize
              minRows={3}
              placeholder="Discription"
              onBlur={handleOnBlur}
              name="description"
              style={{ width: 500, height: 300 }}
            />
            <br />
            <Button
              sx={{ width: "48%", fontWeight: 600 }}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProductsAdmin;
