import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import JobApplication from "pages/JobApplication/JobApplication";
import ViewFinalCandidates from "pages/ViewFinalCandidates/ViewFinalCandidates";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@material-ui/icons";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adminView, setAdminView] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSwitchHR = () => {
    setAnchorEl(null);
  };

  const handleSwitchCandidate = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography
            align="left"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            TALENTO
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ backgroundColor: "#AAFF00" }}
            >
              <AccountCircle style={{ color: "black" }}></AccountCircle>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleSwitchCandidate}
            >
              <MenuItem>
                <NavLink to="/viewFinalCandidates">
                  <Typography variant="overline">HR Admin</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/jobApplication">
                  <Typography variant="overline">Candidate</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<div>entry</div>} />
        <Route path="/viewFinalCandidates/" element={<ViewFinalCandidates />} />
        <Route path="/jobApplication/" element={<JobApplication />} />
        <Route path="*" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
