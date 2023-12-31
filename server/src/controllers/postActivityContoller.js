const { Activity, Country } = require("../db");

module.exports = async (req, res) => {
  const { name, difficulty, season, duration, countries } = req.body;
  console.log(req.body);
  const activityParams = { difficulty, season, duration };
  const countriesID = [...countries];

  try {
    const [newActivity, created] = await Activity.findOrCreate({
      where: { name },
      defaults: activityParams,
    });
    console.log(created);

    console.log(countries);

    const countriesWithActivity = await Country.findAll({
      where: { id: countriesID },
    });

    newActivity.setCountries(countriesWithActivity);

    res.status(200).json({ newActivity, created });
  } catch (error) {
    console.error(error);
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
