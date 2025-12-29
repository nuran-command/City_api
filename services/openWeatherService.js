const axios = require("axios");

const API_KEY = process.env.OPENWEATHER_API_KEY;

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const res = await axios.get(url);
    const d = res.data;

    return {
      city: d.name,
      country: d.sys.country,
      temperature: d.main.temp,
      feels_like: d.main.feels_like,
      humidity: d.main.humidity,
      pressure: d.main.pressure,
      wind: d.wind.speed,
      description: d.weather[0].description,
      icon: d.weather[0].icon,
      lat: d.coord.lat,
      lon: d.coord.lon,
      rain_3h: d.rain ? d.rain["3h"] || 0 : 0
    };
  } catch (e) {
    if (e.response && e.response.status === 404) {
      throw new Error("City not found");
    }
    throw new Error("Server error");
  }
}

module.exports = { getWeather };