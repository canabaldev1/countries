import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Activities.module.css";

function Activities() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const endPoint = "http://localhost:3001/activity";
      const { data } = await axios(endPoint);
      setActivities(data.activities);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(Number(event.target.id));
    const id = Number(event.target.id);

    try {
      const endPoint = "http://localhost:3001/activity";
      const { data } = await axios.delete(endPoint, { data: { id } });
      setActivities(data.activities);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {activities.length
        ? activities.map((act) => {
            return (
              <div key={`div${act.id}`} className={styles.activityContainer}>
                <div>
                  <p className={styles.line}>
                    ID: <span> {act.id} </span>
                  </p>
                  <p className={styles.line}>
                    Name: <span> {act.name} </span>
                  </p>
                  <p className={styles.line}>
                    Difficulty: <span> {act.difficulty} </span>
                  </p>
                  <p className={styles.line}>
                    Season: <span> {act.season} </span>
                  </p>
                  <p className={styles.line}>
                    Duration: <span> {act.duration} </span>
                  </p>
                  <p className={styles.line}>
                    {act.Countries.length > 1 ? "Countries: " : "Country: "}
                    <span>
                      {new Intl.ListFormat("en-GB").format(
                        act.Countries.map((country) => country.nameCommon)
                      )}
                    </span>
                  </p>
                </div>
                <button
                  className={styles.button}
                  id={act.id}
                  onClick={handleDelete}
                >
                  Delete activity
                </button>
              </div>
            );
          })
        : "No activities yet"}
    </div>
  );
}

export default Activities;
