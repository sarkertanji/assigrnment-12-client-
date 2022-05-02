import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const SinngleReview = ({ review }) => {
  const { costomer_Name, product_name, description, rating } = review;
  return (
    <Card
      border="dark"
      style={{ width: "18rem", backgroundColor: " rgb(240, 255, 250)" }}
    >
      <Card.Header style={{ fontWeight: 600 }}>
        My Name Is {costomer_Name.toUpperCase()}
      </Card.Header>
      <Card.Body>
        <Card.Title>Product Model: {product_name.toUpperCase()}</Card.Title>
        <Card.Text>{description.slice(0, 150)}</Card.Text>
        <Card.Text>
          <Rating name="read-only" value={rating} readOnly />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinngleReview;
