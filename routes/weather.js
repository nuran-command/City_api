const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/openWeatherService");

router.get("/", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const data = await getWeather(city);
    res.json(data);
  } catch (err) {
    if (err.message === "City not found") {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;