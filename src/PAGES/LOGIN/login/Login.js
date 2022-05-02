import React, { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../HOOKS/useAuth";
import Alert from "@mui/material/Alert";

const Login = () => {
  const { handleLogin, user, error } = useAuth();

  //
  const [userDetail, setUserDetail] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const user = { ...userDetail };
    user[field] = value;
    setUserDetail(user);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleUserRegister = (e) => {
    e.preventDefault();

    handleLogin(userDetail.email, userDetail.password, location, navigate);
  };
  return (
    <div className="login-from-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleUserRegister}>
        <TextField
          sx={{ width: "1", my: 2 }}
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
        <Typography
          sx={{ mb: 2 }}
          variant="button"
          display="block"
          gutterBottom
        >
          <Link to="/register">New Here? Please Register First</Link>
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

export default Login;
