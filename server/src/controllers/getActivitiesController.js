const { Country, Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["id", "name", "nameCommon"],
        through: { attributes: [] },
      },
    });
    // console.log(activities);
    res.status(200).json({ activities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
