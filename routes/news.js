const express = require("express");
const router = express.Router();
const { getNews } = require("../services/newsService");

router.get("/", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const news = await getNews(city);
    res.json({ city, articles: news });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;