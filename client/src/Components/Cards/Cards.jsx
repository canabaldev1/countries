import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDebounce } from "../../assets/customHooks";

function Cards({ searchName }) {
  const dispatch = useDispatch();
  const [isCountry, setIsCountry] = useState(true);

  name = useDebounce(searchName, 1000);

  useEffect(() => {
    dispatch(searchCountries(name));
  }, [name]);

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    setIsCountry(Boolean(countries.length));
  }, [countries]);

  return (
    <div className={styles.container}>
      {!isCountry && <h1>NO COUNTRY FOUND</h1>}
      <div className={styles.countryContainer}>
        {countries.map((country) => {
          return (
            <Card
              key={`card${country.id}`}
              id={country.id}
              name={country.name}
              nameCommon={country.nameCommon}
              flag={country.flag}
              coatOfArms={country.coatOfArms}
              continent={country.continent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
