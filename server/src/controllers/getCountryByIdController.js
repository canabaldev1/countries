const { Country } = require("../db");
const { Activity } = require("../db");
const { CountryName } = require("../db");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    id = id.toUpperCase();
    const country = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration"],
          through: {
            attributes: [], // revisar el comportamiento de esta propiedad
          },
        },
        {
          model: CountryName,
          as: "names",
          attributes: ["common", "official", "languageId"],
        },
      ],
    });
    res.status(200).json({ country });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
