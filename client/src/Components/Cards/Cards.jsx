import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDebounce } from "../../assets/customHooks";

function Cards({ searchName }) {
  const dispatch = useDispatch();
  const [isCountry, setIsCountry] = useState(false);

  // custom hook - Demorar la peticion.
  // el valor de name se asigna 1 segundo DESPUES de que cambia el valor de searchName.
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
      {isCountry ? (
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
      ) : (
        <h1>NO COUNTRY FOUND</h1>
      )}
    </div>
  );
}

export default Cards;
