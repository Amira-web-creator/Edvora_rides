import React, { Fragment } from "react";
import User from "./User";

const Users = (props) => {
  return (
  
    <Fragment>
      {props.users.map((user) => (
        <User id={user.id} name={user.name} stationcode={user.station_code} url={user.url} />
      ))}

</Fragment>
  );
};

export default Users;
