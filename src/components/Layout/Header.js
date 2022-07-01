import React, { Fragment } from "react";
import Users from "../Users/Users";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Edvora</h1>
        <Users></Users>
      </header>
    </Fragment>
  );
};

export default Header;
