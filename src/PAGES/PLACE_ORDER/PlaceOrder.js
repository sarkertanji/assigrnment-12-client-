import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import OrderFrom from "../SHARED/order_from/OrderFrom";

const PlaceOrder = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products/${id} `;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);
  return (
    <Box sx={{ flexGrow: 1, my: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <OrderFrom></OrderFrom>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={singleProduct.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {singleProduct.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {singleProduct.description}
                </Typography>
                <span>
                  Price:${singleProduct.price} <br />
                  <Rating
                    name="read-only"
                    value={singleProduct.rating ?? " "}
                    readOnly
                  />
                </span>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlaceOrder;
