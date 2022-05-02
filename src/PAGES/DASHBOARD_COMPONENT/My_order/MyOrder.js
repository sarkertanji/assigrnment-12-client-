import React, { useEffect, useState } from "react";
import useAuth from "../../../HOOKS/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MySingleOrder from "./MySingleOrder";
import Button from "@mui/material/Button";

const MyOrder = () => {
  const { user } = useAuth();
  const [userOrders, setUserOrder] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/orders/email?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserOrder(data);
        console.log(data);
      });
  }, [user?.email, deleteConfirm]);

  const handleOnClick = (id) => {
    const procced = window.confirm("Are you sure you wanna cancled the order?");
    if (procced) {
      const productId = { id: id };
      fetch(`http://localhost:5000/orders`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productId),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Order Canceled");
            setDeleteConfirm(true);
          }
        });
    }
  };

  const rows = userOrders;

  return (
    <div>
      <h1>this is my order</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name(Costomer)</TableCell>
              <TableCell align="right">Product(model)</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Cancel Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.name.toUpperCase()}</TableCell>
                <TableCell align="right">
                  <MySingleOrder product_Id={row.product_Id}></MySingleOrder>
                </TableCell>
                <TableCell align="right">{row.order}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOnClick(row.product_Id)}
                    variant="outlined"
                  >
                    Cancled
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

export default MyOrder;
