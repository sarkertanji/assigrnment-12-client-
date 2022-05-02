import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const MakeAdmin = () => {
  const [user, setUser] = useState("");
  const handleOnBlur = (e) => {
    setUser(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updateUser = { user };
    const url = `http://localhost:5000/users`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    }).then();
  };
  return (
    <div>
      <h1>You Can Make Any User From Here</h1>
      <form onSubmit={handleOnSubmit}>
        <TextField
          sx={{ width: "50%", fontWeight: 600, my: 5 }}
          label="Email"
          name="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button
          sx={{ width: "50%", fontWeight: 600 }}
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
