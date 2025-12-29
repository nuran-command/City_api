require("dotenv").config();
const express = require("express");
const cors = require("cors");

const weatherRouter = require("./routes/weather");
const newsRouter = require("./routes/news");
const currencyRouter = require("./routes/currency");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/weather", weatherRouter);
app.use("/api/news", newsRouter);
app.use("/api/currency", currencyRouter);

app.get("/api/test", (req, res) => {
  res.json({ message: "Server works" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});