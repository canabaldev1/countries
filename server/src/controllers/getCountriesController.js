const { Country } = require("../db");
const { Activity } = require("../db");
const { CountryName } = require("../db");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    let countries = "";
    if (name) {
      countries = await Country.findAll({
        attributes: ["id", "name", "flag"],
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        order: [["name", "ASC"]], //ORDENAR
      });
      console.log(countries);
      if (!countries.length) {
        return res.status(404).json({ error: "Country Not Found" });
      }
    } else {
      countries = await Country.findAll({
        attributes: ["id", "name", "flag"],
        // include: [
        //   {
        //     model: Activity,
        //     attributes: ["name", "difficulty", "duration"],
        //     through: {
        //       attributes: [], // revisar el comportamiento de esta propiedad
        //     },
        //   },
        //   {
        //     model: CountryName,
        //     as: "names",
        //     attributes: ["common", "official", "languageId"],
        //   },
        // ],
        order: [["name", "ASC"]], //ORDENAR
      });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
