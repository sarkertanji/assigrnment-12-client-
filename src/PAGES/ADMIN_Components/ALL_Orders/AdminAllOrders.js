import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SingleOrders from "../Single_orders/SingleOrders";

const AdminAllOrders = () => {
  const [orders, setorders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(false);
  useEffect(() => {
    fetch("https://whispering-sands-47045.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setorders(data);
      });
  }, [orderStatus]);
  const handleShepmentToggol = (id) => {
    const productId = { productId: id };
    const url = `https://whispering-sands-47045.herokuapp.com/orders`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productId),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("order shiped");
          setOrderStatus(true);
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Manage All Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "25px", fontWeight: 600 }}>
                Costomer Detail
              </TableCell>
              <TableCell
                sx={{ fontSize: "25px", fontWeight: 600 }}
                align="right"
              >
                Products Detail
              </TableCell>
              <TableCell
                sx={{ fontSize: "25px", fontWeight: 600 }}
                align="right"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span>Costomer_Name: {order.name.toUpperCase()}</span>
                  <br />
                  <span>Costomer_Email: {order.email}</span>
                  <br />
                  <span>Costomer_Phone: {order.phone_number}</span>
                  <br />
                  <span>
                    Address: Postal Code:{order.post_code}, <br />
                    House Number:{order.house_number}
                  </span>
                  <br />
                  <span>Status: {order.order}</span>
                  <br />
                </TableCell>
                <TableCell align="right">
                  <SingleOrders product_Id={order.product_Id}></SingleOrders>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleShepmentToggol(order.product_Id)}
                    variant="outlined"
                  >
                    Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminAllOrders;
