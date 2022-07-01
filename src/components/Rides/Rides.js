import React from 'react';
import classes from './Rides.module.css';
import Rideitem from './RideItem/RideItem'
const Rides = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.rides.map((ride) => (
        <Rideitem
          key={ride.id}
          id={ride.id}
          date={ride.date}
          state={ride.state}
          station_path={ride.station_path}
          destination_station_code={ride.destination_station_code}
          map_url={ride.map_url}
          city={ride.city}
          origin_station_code={ride.origin_station_code}
        />
      ))}
    </ul>
  );
};

export default Rides;
