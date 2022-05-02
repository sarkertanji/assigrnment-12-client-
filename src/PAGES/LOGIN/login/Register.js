import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../HOOKS/useAuth";
import Alert from "@mui/material/Alert";

const Register = () => {
  const { handleRegister, error, user } = useAuth();

  //
  const [userDetail, setUserDetail] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const user = { ...userDetail };
    user[field] = value;
    setUserDetail(user);
  };

  const navigate = useNavigate();
  const handleUserRegister = (e) => {
    e.preventDefault();
    if (userDetail.password !== userDetail.password2) {
      alert(`passWord didn't match`);
      return;
    }
    handleRegister(
      userDetail.email,
      userDetail.password,
      userDetail.name,
      navigate
    );
  };
  return (
    <div className="login-from-container">
      <h1>REGISTER</h1>
      <form onSubmit={handleUserRegister}>
        <TextField
          sx={{ width: "1", my: 2 }}
          id="standard-basic"
          label="Your Name"
          name="name"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "1", mb: 2 }}
          id="standard-basic"
          label="Email"
          name="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "1", mb: 2 }}
          id="standard-basic"
          label="Password"
          name="password"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "1", mb: 2 }}
          id="standard-basic"
          label="Confirm Password"
          name="password2"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Typography
          sx={{ mb: 2 }}
          variant="button"
          display="block"
          gutterBottom
        >
          <Link to="/login"> Alrady Have An Account ? Please Login.</Link>
        </Typography>
        <Button type="submit" sx={{ width: "1" }} variant="contained">
          LOGIN
        </Button>
        {error && <Alert severity="error"> {error}</Alert>}
        {user && <Alert severity="success">User Create Succesfully</Alert>}
      </form>
    </div>
  );
};

export default Register;
