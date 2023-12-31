import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../Redux/actions.js";
import axios from "axios";

function SearchBar({ searchName, setSearchName }) {
  const dispatch = useDispatch();

  const [activities, setActivities] = useState([]);

  const handleSearchName = (event) => {
    const name = event.target.value;
    setSearchName(name);
  };

  const CONTINENTS = [
    "Asia",
    "South America",
    "North America",
    "Oceania",
    "Antarctica",
    "Africa",
    "Europe",
  ];

  const [filterData, setFilterData] = useState({
    order: "ascending",
    continents: [],
    activities: [],
    population: { min: 0, max: 0 },
  });

  const handleFilter = (event) => {
    // console.log("ejecuta handle Filter");
    var temporalFilters = { ...filterData };
    // console.log(temporalFilters);

    switch (event.target.name) {
      case "order":
        temporalFilters = {
          ...temporalFilters,
          [event.target.name]: event.target.value,
        };
        break;

      case "continents":
        temporalFilters[event.target.name].includes(event.target.value)
          ? (temporalFilters = {
              ...temporalFilters,
              [event.target.name]: filterData[event.target.name].filter(
                (x) => x !== event.target.value
              ),
            })
          : (temporalFilters = {
              ...temporalFilters,
              [event.target.name]: [
                ...filterData[event.target.name],
                event.target.value,
              ],
            });

        break;

      case "activities":
        temporalFilters[event.target.name].includes(event.target.value)
          ? (temporalFilters = {
              ...temporalFilters,
              [event.target.name]: filterData[event.target.name].filter(
                (x) => x !== event.target.value
              ),
            })
          : (temporalFilters = {
              ...temporalFilters,
              [event.target.name]: [
                ...filterData[event.target.name],
                event.target.value,
              ],
            });

        break;

      default:
        break;
    }

    // console.log(temporalFilters);
    setFilterData(temporalFilters);

    dispatch(filterCountries(temporalFilters));
  };

  // const activities = ["actividad 1", "actividad 2", "actividad 3"];

  const fetchActivities = async () => {
    const endPoint = "http://localhost:3001/activity";
    const { data } = await axios(endPoint);
    // console.log(data.activities);
    setActivities(data.activities);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const filterContainerShow = styles.filterContainer;
  const filterContainerNoShow = `${styles.filterContainer} ${styles.filterNoShow}`;
  const [filterContainer, setFilterContainer] = useState(filterContainerShow);

  const handleDisplayFiltetrs = (event) => {
    filterContainer === filterContainerShow
      ? setFilterContainer(filterContainerNoShow)
      : setFilterContainer(filterContainerShow);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <label htmlFor="searchName">Search: </label>
        <input
          value={searchName}
          onChange={handleSearchName}
          id="searchName"
          className={styles.searchName}
          type="text"
        />
        <label className={styles.burger} htmlFor="burger">
          <input type="checkbox" id="burger" onClick={handleDisplayFiltetrs} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className={filterContainer}>
        <fieldset key="fieldOrder" className={styles.field}>
          <legend>Order:</legend>

          <div>
            <input
              type="radio"
              id="ascending"
              key="ascending"
              name="order"
              value="ascending"
              checked={filterData.order === "ascending"}
              onChange={handleFilter}
            />
            <label htmlFor="ascending">Ascending</label>
          </div>
          <div>
            <input
              type="radio"
              id="descending"
              key="descending"
              name="order"
              value="descending"
              checked={filterData.order === "descending"}
              onChange={handleFilter}
            />
            <label htmlFor="descending">Descending</label>
          </div>
        </fieldset>

        <fieldset key="fieldContinent" className={styles.field}>
          <legend>Continent:</legend>
          {CONTINENTS.map((c) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={c}
                  key={`input${c}`}
                  name="continents"
                  value={c}
                  onChange={handleFilter}
                />
                <label key={`label${c}`} htmlFor={c}>
                  {c}
                </label>
              </div>
            );
          })}
        </fieldset>

        <fieldset key="fieldActivities" className={styles.field}>
          <legend>Activities:</legend>
          {activities.map((a) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={a.id}
                  key={a.id}
                  name="activities"
                  value={a.name}
                  onChange={handleFilter}
                />
                <label htmlFor={a.id}>{a.name}</label>
              </div>
            );
          })}
        </fieldset>

        {/* <fieldset key="fieldPopulation">
          <legend>Population:</legend>

          <div>
            <label htmlFor="minPopulation">Minimum population</label>
            <input
              type="number"
              id="minPopulation"
              name="population"
              min="0"
              onChange={handleFilter}
            />
          </div>
          <div>
            <label htmlFor="maxPopulation">Maximum population</label>
            <input
              type="number"
              id="maxPopulation"
              name="population"
              min="0"
              onChange={handleFilter}
            />
          </div>
        </fieldset> */}
      </div>
    </div>
  );
}

export default SearchBar;
