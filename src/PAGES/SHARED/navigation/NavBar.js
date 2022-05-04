import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../HOOKS/useAuth";

const NavBar = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">-GMS-</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto mx-5">
              <Link
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                  marginTop: "9px",
                  marginLeft: "15px",
                }}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                  marginTop: "9px",
                  marginLeft: "15px",
                }}
              >
                Dashboard
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                  marginTop: "9px",
                  marginLeft: "15px",
                }}
                to="/explor"
              >
                Explor More
              </Link>
            </Nav>
            {user ? (
              <Button
                onClick={handleLogOut}
                style={{
                  border: "none",
                }}
                className="mx-4"
                variant="outline-light"
              >
                Log out
              </Button>
            ) : (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                }}
                className="mx-4  "
                to="/login"
              >
                Login
              </Link>
            )}
            <Navbar.Text>
              Signed in as:
              <span style={{ color: "white", marginLeft: "5px" }}>
                {user?.displayName.toUpperCase()}
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
