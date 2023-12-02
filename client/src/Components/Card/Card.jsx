import React from "react";
import styles from "./Card.module.css";

function Card({ id, name, nameCommon, flag, continent, coatOfArms }) {
  // console.log(coatOfArms);

  return (
    <div className={styles.container}>
      {/* <h2>{id}</h2> */}
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div className={styles.nameCommonContainer}>
        <h3 className={styles.nameCommon}>{nameCommon}</h3>
      </div>
      <div className={styles.continentContainer}>
        <h3 className={styles.continent}>{continent}</h3>
      </div>
      <img className={styles.flagImage} src={flag} alt={name} />
      <div className={styles.coatOfArmsContainer}>
        {coatOfArms ? (
          <img className={styles.coatOfArmsImage} src={coatOfArms} alt={name} />
        ) : (
          <img className={styles.coatOfArmsImage} src={flag} alt={name} />
        )}
      </div>
    </div>
  );
}

export default Card;