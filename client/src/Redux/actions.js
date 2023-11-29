import axios from "axios";

// ACCIONES
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";

// funciones para el rerducer
export const searchCountries = (name) => {
  console.log("ejecuta searchCountries");
  const endPoint = "http://localhost:3001/countries/?name=";
  const nameToSearch = name || "";

  return async (dispatch) => {
    try {
      const { data } = await axios(endPoint + nameToSearch);
      console.log(data);
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: data.countries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
