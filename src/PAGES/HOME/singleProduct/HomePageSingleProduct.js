import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const HomePageSingleProduct = ({ product }) => {
  const { img, name, price, rating, description, _id } = product;
  return (
    <div className="single-product">
      <Card
        style={{
          width: "22rem",
          padding: "5px",
          backgroundColor: " rgb(240, 255, 250)",
        }}
      >
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "250px" }}
          src={img}
        />
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>{description.slice(0, 150)}</Card.Text>
          <Card.Text>
            <span>
              Price:${price} <br />
              <Rating name="read-only" value={rating} readOnly />
            </span>
          </Card.Text>
          <Link to={`/placeorder/${_id}`}>
            <Button
              style={{
                padding: "8px 55px",
              }}
            >
              Purchase
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageSingleProduct;
