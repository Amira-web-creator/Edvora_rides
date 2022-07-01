import React, { Fragment } from "react";
import classes from "./User.module.css";

const User = (props) => {
  return (
    <Fragment>
      <span>{props.name}</span>
      <span>{props.stationcode}</span>
    </Fragment>
  );
};

export default User;
