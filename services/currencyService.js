const axios = require("axios");

const API_KEY = process.env.CURRENCY_API_KEY;

async function getCurrency(countryCode) {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  try {
    const res = await axios.get(url);
    const rates = res.data.conversion_rates;

    const countryCurrencyMap = {
      KZ: "KZT",
      US: "USD",
      RU: "RUB",
      EU: "EUR",
      TR: "TRY"
    };

    const currency = countryCurrencyMap[countryCode];

    if (!currency || !rates[currency]) {
      throw new Error("Currency not supported");
    }

    return {
      base: "USD",
      currency,
      rate: rates[currency]
    };
  } catch (e) {
    console.error("Currency API error:", e.response?.data || e.message);
    throw new Error("Server error");
  }
}

module.exports = { getCurrency };