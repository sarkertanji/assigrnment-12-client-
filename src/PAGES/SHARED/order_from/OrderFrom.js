import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../HOOKS/useAuth";
import { useNavigate, useParams } from "react-router-dom";

const OrderFrom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const currentValue = {
    email: user?.email,
    name: user?.displayName,
    order: "panding",
    product_Id: id,
  };

  const [userDetail, setUserDetail] = useState(currentValue);
  //
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updateDetail = { ...userDetail };
    updateDetail[field] = value;
    setUserDetail(updateDetail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order pleced succesfully");
          navigate("/");
        }
      });
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
      <h1>Confirm Your Order</h1>
      <TextField
        sx={{ my: 2, width: "75%" }}
        label="Name"
        name="name"
        onBlur={handleOnBlur}
        defaultValue={user?.displayName}
        variant="standard"
      />
      <br />
      <TextField
        sx={{ mb: 2, width: "75%" }}
        label="Email"
        name="email"
        type="email"
        onBlur={handleOnBlur}
        defaultValue={user?.email}
        variant="standard"
      />
      <br />
      <TextField
        sx={{ mb: 2, width: "75%" }}
        required
        label="City"
        name="city"
        onBlur={handleOnBlur}
        variant="standard"
      />
      <br />
      <TextField
        sx={{ mb: 2, width: "75%" }}
        type="number"
        required
        label="Post Code"
        name="post_code"
        onBlur={handleOnBlur}
        variant="standard"
      />
      <br />
      <TextField
        sx={{ mb: 2, width: "75%" }}
        required
        label="House Number"
        name="house_number"
        onBlur={handleOnBlur}
        variant="standard"
      />
      <br />
      <TextField
        sx={{ mb: 2, width: "75%" }}
        required
        label="Phone Number"
        name="phone_number"
        onBlur={handleOnBlur}
        variant="standard"
      />
      <br />
      <Button type="submit" variant="outlined" sx={{ my: 2, width: "75%" }}>
        Confirm Order
      </Button>
    </form>
  );
};

export default OrderFrom;
