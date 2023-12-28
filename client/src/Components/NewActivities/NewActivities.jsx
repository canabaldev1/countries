import React, { useEffect, useState } from "react";
import styles from "./NewActivities.module.css";
import { useDebounce } from "../../assets/customHooks";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCountries,
  emptySearchCountries,
  addActivity,
} from "../../Redux/actions";

function NewActivities() {
  // Todo lo necesario para la busqueda de los paises a agregar a las actividades

  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  name = useDebounce(searchName, 500);

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (name) {
      dispatch(searchCountries(name));
    } else {
      dispatch(emptySearchCountries());
    }
  }, [name]);

  const handleSearchName = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    setSearchName(event.target.value);
  };

  // // console.log(countries);
  // // console.log("Probando");

  // Reunir informacion de la actividad y su creacion

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleActivityParameters = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const newActivity = { ...activity, [key]: value };
    // console.log(newActivity);
    setActivity(newActivity);
  };

  const handleClickOnCountries = (event) => {
    event.preventDefault();

    const { id, name } = event.target;
    const namecommon = event.target.dataset.namecommon;

    let stateCountries = [...activity.countries];
    const condition = stateCountries.some((country) => country.id === id);

    if (condition) {
      stateCountries = stateCountries.filter((country) => country.id !== id);
    } else {
      stateCountries = [
        ...stateCountries,
        { id, name, nameCommon: namecommon },
      ];
    }
    // console.log(stateCountries);

    setActivity({ ...activity, countries: stateCountries });

    // console.log(activity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let activityParams = {
      ...activity,
      countries: activity.countries.map((country) => country.id),
    };
    // console.log(activityParams);
    activityParams = dispatch(addActivity(activityParams));

    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    setSearchName("");
  };

  return (
    <form className={styles.container}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleActivityParameters}
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          value={activity.name}
          required
        />
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>

        <select
          onChange={handleActivityParameters}
          name="difficulty"
          id="difficulty"
          value={activity.difficulty}
          required
        >
          {["", 1, 2, 3, 4, 5].map((n) => {
            return (
              <option key={n} value={n}>
                {n}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input
          onChange={handleActivityParameters}
          type="number"
          id="duration"
          name="duration"
          required
          value={activity.duration}
        />
      </div>
      <div>
        <label htmlFor="season">Season</label>
        <select
          onChange={handleActivityParameters}
          id="season"
          name="season"
          value={activity.season}
        >
          {["", "Summer", "Fall", "Winter", "Spring"].map((n) => {
            return (
              <option key={n} value={n}>
                {n}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="countries">Countries</label>
        <input
          type="text"
          id="Name"
          name="Name"
          onChange={handleSearchName}
          value={searchName}
        />
        <div className={styles.countryTagContainer}>
          {countries.map((country) => {
            // // console.log(country);
            return (
              <button
                onClick={handleClickOnCountries}
                className={styles.countryTag}
                id={country.id}
                key={`search${country.id}`}
                name={country.name}
                data-namecommon={country.nameCommon}
              >
                {country.nameCommon}
              </button>
            );
          })}
        </div>
        <div className={styles.countryTagContainer}>
          {activity.countries.map((country) => {
            return (
              <button
                onClick={handleClickOnCountries}
                className={styles.countryTag}
                id={country.id}
                key={`search${country.id}`}
                name={country.name}
                data-namecommon={country.nameCommon}
              >
                {country.nameCommon ? country.nameCommon : ""}
              </button>
            );
          })}
        </div>
      </div>
      <button onClick={handleSubmit}>Create activity</button>
    </form>
  );
}

export default NewActivities;
