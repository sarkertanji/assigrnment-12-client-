import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../HOOKS/useAuth";

const drawerWidth = 250;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { handleLogOut, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NavLink
          style={{
            textDecoration: "none",
            padding: "15px",
            fontWeight: 500,
            color: "black",
            fontSize: "20px",
          }}
          to="/home"
        >
          Home
        </NavLink>
        <br />

        {admin ? (
          <Box>
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/allorders"
            >
              Manage All Orders
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/manageproduct"
            >
              Manage products
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/addproduct"
            >
              Add A Products
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/makeadmin"
            >
              Make Admin
            </NavLink>
          </Box>
        ) : (
          <Box>
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/myorder"
            >
              My Order
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/payment"
            >
              Pay
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                padding: "15px",
                fontWeight: 500,
                color: "black",
                fontSize: "20px",
              }}
              to="/dashboard/review"
            >
              Review
            </NavLink>
            <br />
          </Box>
        )}
        <br />
        <Button onClick={handleLogOut} variant="outlined">
          Log Out
        </Button>
        <br />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Typography paragraph>
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
