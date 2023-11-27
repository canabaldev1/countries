const axios = require("axios");
const { API_URL } = process.env;
console.log(API_URL);
const { Country, CountryName } = require("../db");

const fetchAllData = async () => {
  try {
    const { data } = await axios(API_URL);
    const countries = data.map((country) => {
      return {
        id: country.cioc || country.cca3,
        name: country.name.official,
        flag: country.flags.svg,
        continent: country.continents && country.continents.toString(),
        capital: country.capital && country.capital.toString(),
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
    await Country.bulkCreate(countries, {
      updateOnDuplicate: [
        "id",
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ],
    });

    const languages = data.map((country) => {
      return Object.entries(country.translations).map((name) => {
        return {
          countryId: country.cioc || country.cca3,
          languageId: name[0],
          official: name[1].official,
          common: name[1].common,
        };
      });
    });

    await CountryName.bulkCreate(languages.flat(), {
      updateOnDuplicate: ["countryId", "languageId", "official", "common"],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchAllData;
