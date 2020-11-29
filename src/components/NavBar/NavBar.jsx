import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../assests/commerse.jfif";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
        <Toolbar>
          <Typography
            variant={"h6"}
            className={classes.title}
            color={"inherit"}
            component={Link}
            to={"/"}
          >
            <img
              src={logo}
              alt={"Commerce.js"}
              height={"25px"}
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to={"/cart"}
                aria-label={"Show card items"}
                color={"inherit"}
              >
                <Badge badgeContent={totalItems} color={"secondary"}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
