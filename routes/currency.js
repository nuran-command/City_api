const express = require("express");
const router = express.Router();
const { getCurrency } = require("../services/currencyService");

router.get("/", async (req, res) => {
  const country = req.query.country;

  if (!country) {
    return res.status(400).json({ error: "Country code is required" });
  }

  try {
    const data = await getCurrency(country);
    res.json(data);
  } catch (err) {
    if (err.message === "Currency not supported") {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;