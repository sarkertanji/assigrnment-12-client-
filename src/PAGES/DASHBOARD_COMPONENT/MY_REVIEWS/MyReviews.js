import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const [review, setReview] = useState({});
  const navigate = useNavigate();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updateReview = { ...review };
    updateReview[field] = value;
    setReview(updateReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://whispering-sands-47045.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(`Review Published,thank you to being with us!`);
          navigate("/dashboard/myorder");
        }
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <h1>Submit Your Review</h1>
      </Grid>
      <Grid item md={12} xs={12}>
        <form onSubmit={handleSubmit}>
          <TextareaAutosize
            name="costomer_Name"
            onBlur={handleOnBlur}
            placeholder="Costomer name"
            style={{ width: 200 }}
          />
          <br />
          <TextareaAutosize
            name="product_name"
            placeholder="Product name"
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
  );
};

export default MyReviews;
