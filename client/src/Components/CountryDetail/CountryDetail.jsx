import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./CountryDetail.module.css";

function CountryDetail() {
  const { id } = useParams();
  const ENDPOINT = `http://localhost:3001/countries/`;

  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const { data } = await axios(ENDPOINT + id);
        const { country } = data;
        setCountry(country);
      } catch (error) {}
    };
    fetchCountry();
    return () => {
      setCountry({});
    };
  }, [id]);

  return (
    <div>
      {country.id ? (
        <div>
          <p className={styles.line}>
            Identification: <span> {country.id} </span>
          </p>
          <p className={styles.line}>
            Official name: <span> {country.name} </span>
          </p>
          <p className={styles.line}>
            Common Name: <span> {country.nameCommon} </span>
          </p>
          <p className={styles.line}>
            Continent: <span> {country.continent} </span>
          </p>
          <p className={styles.line}>
            Capital: <span> {country.capital} </span>
          </p>
          <p className={styles.line}>
            Subregion: <span> {country.subregion} </span>
          </p>
          <p className={styles.line}>
            Area:{" "}
            <span>
              {" "}
              {new Intl.NumberFormat("en", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(country.area)}{" "}
              m2{" "}
            </span>
          </p>
          <p className={styles.line}>
            Population:{" "}
            <span>
              {" "}
              {new Intl.NumberFormat("en", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(country.population)}
            </span>
          </p>
          <p className={styles.line}>
            Activities:{" "}
            <span>{new Intl.ListFormat("en").format(country.Activities)}</span>
          </p>
          <p className={styles.line}></p>
          <img src={country.flag} alt={`flag of ${country.name}`} />
          <img
            src={country.coatOfArms}
            alt={`coat of arms of ${country.name}`}
          />
        </div>
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default CountryDetail;
