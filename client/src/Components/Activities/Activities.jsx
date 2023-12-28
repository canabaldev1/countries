import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Activities.module.css";

function Activities() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const endPoint = "http://localhost:3001/activity";
    const { data } = await axios(endPoint);
    setActivities(data.activities);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      {activities.length
        ? activities.map((act) => {
            console.log(act);
            return (
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
            );
          })
        : "No activities yet"}
    </div>
  );
}

export default Activities;
