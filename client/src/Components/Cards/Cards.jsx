import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import { useEffect } from "react";

function Cards(params) {
  const dispatch = useDispatch();

  const nameToSearch = "";

  useEffect(() => {
    dispatch(searchCountries(nameToSearch));
  }, []);

  const countries = useSelector((state) => state.countries);
  console.log(countries);

  return (
    <div>
      <h2>buscar: {nameToSearch}</h2>

      {countries.map((country) => {
        return <h5 key={country.id}>{country.name}</h5>;
      })}
    </div>
  );
}

export default Cards;
