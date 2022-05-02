import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ManageProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [deleteConfirm]);

  const handleDeleteProduct = (id) => {
    const procced = window.confirm("Are you sure you wanna cancled the order?");
    if (procced) {
      const productId = { id: id };
      fetch(`http://localhost:5000/products`, {
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
  return (
    <div>
      <h1>Manage products </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Products Detail</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span> {product.name}</span>
                  <span>
                    <img
                      style={{
                        width: "100px",
                        borderRadius: "10px",
                        margin: "0 10px",
                      }}
                      src={product.img}
                      alt=""
                    />
                  </span>
                  <span> price: ${product.price}</span>
                  <span> rating: {product.rating}</span>
                </TableCell>

                <TableCell align="right">
                  <Button
                    onClick={() => handleDeleteProduct(product._id)}
                    variant="outlined"
                  >
                    Delete
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

export default ManageProductsAdmin;
