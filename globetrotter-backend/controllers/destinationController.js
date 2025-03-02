const Destination = require("../models/Destination");

exports.getRandomDestination = async (req, res) => {
  try {
    const count = await Destination.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const destination = await Destination.findOne().skip(randomIndex);
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
