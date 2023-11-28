const { Activity } = require("../db");

module.exports = async (req, res) => {
  const activity = req.body;
  console.log(activity);
  try {
    const [newActivity, created] = await Activity.findOrCreate({
      where: activity,
    });
    res.status(200).json({ newActivity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
