import React, { useState, useEffect, useCallback } from "react";
import Userslist from "./UsersList"

function Availblerides() {
  const path = "user";
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://assessment.api.vweb.app/${path}`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);

      const loadedUsers= [];
     
        loadedUsers.push({
          name: data.name,
          station_code: data.station_code,
         
        });
     

      setUsers(loadedUsers);
      console.log(loadedUsers);

    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  let content = <p>No Rides click above to get rides</p>;

  if (users.length > 0) {
    content = <Userslist users={users} />;
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
