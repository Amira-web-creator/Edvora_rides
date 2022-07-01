import React from "react";
import Availablerides from "./Availblerides";
import classes from './Ridestypes.module.css';

const Ridestypes = () => {
  return (
    <div className="md:container md:mx-auto ">
    <section className={classes.listItem}>
      <ul>
        <li>Nearest Rides</li>
        <li>Upcoming Rides</li>
        <li>Past Rides</li>
      </ul>

      <Availablerides></Availablerides>
    </section>
    </div>
  );
};

export default Ridestypes;
