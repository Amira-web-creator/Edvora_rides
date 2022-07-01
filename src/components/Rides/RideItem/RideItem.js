import React from "react";
import classes from "./Rideitem.module.css";
import Card from "../../Ui/Card";

const Rideitem = (props) => {
  let stationMap = props.station_path;

  let mapedStaionPath = stationMap.map((path) => <span>{path},</span>);

  return (
    <Card>
      <li className={classes.oneride}>
        <div className={classes.fBlock}>
          <div className={classes.left}>
            <div className={classes.image}>
              <img src={props.map_url} alt="img" />
            </div>
          </div>
          <div className={classes.middle}>
            <p>
              Ride id<span> : {props.id}</span>
            </p>
            <p>
              Origin Station<span>: {props.origin_station_code}</span>
            </p>
            <p>
              Station_path<span>: [{mapedStaionPath}]</span>
            </p>
            <p>
              Date<span>: {props.date}</span>
            </p>
            <p>Distance:0</p>
          </div>
        </div>

        <div className={classes.right}>
          <button type="button">{props.city}</button>
          <button type="button">{props.state}</button>
        </div>
      </li>
    </Card>
  );
};

export default Rideitem;
