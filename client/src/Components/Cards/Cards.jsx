import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import { useEffect } from "react";
import Card from "../Card/Card";

function Cards(params) {
  const dispatch = useDispatch();

  const nameToSearch = "";

  useEffect(() => {
    dispatch(searchCountries(nameToSearch));
  }, []);

  const countries = useSelector((state) => state.countries);

  console.log(countries[0]);

  return (
    <div>
      <h2>buscar: {nameToSearch}</h2>

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
  );
}

export default Cards;
