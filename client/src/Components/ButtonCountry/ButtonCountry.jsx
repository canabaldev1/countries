import React from "react";

function ButtonCountry(params) {
  console.log(params);
  return (
    <button onClick={params.handleClickOnCountries}>
      {" "}
      {params.namecommon}{" "}
    </button>
  );
}

export default ButtonCountry;
