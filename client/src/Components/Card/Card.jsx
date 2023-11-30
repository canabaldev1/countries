import React from "react";
import styles from "./Card.module.css";

function Card({ id, name, nameCommon, flag, continent, coatOfArms }) {
  // console.log(coatOfArms);

  return (
    <div className={styles.container}>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h3>{nameCommon}</h3>
      <h3>{continent}</h3>
      <img className={styles.flagImage} src={flag} alt={name} />

      {coatOfArms ? (
        <img className={styles.coatOfArmsImage} src={coatOfArms} alt={name} />
      ) : (
        <img className={styles.flagImage} src={flag} alt={name} />
      )}
    </div>
  );
}

export default Card;
