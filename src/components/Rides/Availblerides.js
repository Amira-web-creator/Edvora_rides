import React, { useState, useEffect, useCallback } from "react";
import Rides from "./Rides";

function Availblerides() {
  const path = "rides";
  const [rides, setRides] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRidesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://assessment.api.vweb.app/${path}`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const transformedRides = data.map((onedata) => {
        return {
          key: onedata.id,
          id: onedata.id,
          origin_station_code: onedata.origin_station_code,
          station_path: onedata.station_path,
          destination_station_code: onedata.destination_station_code,
          date: onedata.date,
          map_url: onedata.map_url,
          state: onedata.state,
          city: onedata.city,
        };
      });

      setRides(transformedRides);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRidesHandler();
  }, [fetchRidesHandler]);

  let content = <p>No Rides click above to get rides</p>;

  if (rides.length > 0) {
    content = <Rides rides={rides} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>...Loading</p>;
  }

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default Availblerides;
