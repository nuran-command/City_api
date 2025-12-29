const axios = require("axios");

const API_KEY = process.env.NEWS_API_KEY;

async function getNews(city) {
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    city
  )}&pageSize=5&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const res = await axios.get(url);
    return res.data.articles.map(a => ({
      title: a.title,
      source: a.source.name,
      url: a.url,
      publishedAt: a.publishedAt
    }));
  } catch (e) {
    console.error("News API error:", e.response?.data || e.message);
    throw new Error("Server error");
  }
}

module.exports = { getNews };