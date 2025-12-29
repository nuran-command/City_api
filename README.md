# City_api
CITY DASHBOARD

City Dashboard is a single-page web application that allows users to explore any city in the world. It provides real-time weather data, interactive mapping, local news headlines, and an intelligent currency converter that automatically detects the local currency of the searched city.

This project demonstrates API integration, server-side proxying, and responsive frontend design.

⸻

Features

1. Real-Time Weather
	•	Uses OpenWeatherMap API to fetch live weather data.
	•	Data points included: Temperature, Feels Like, Humidity, Pressure, Wind Speed, Country Code, Coordinates, Rain Volume (last 3h), Weather Icon.
	•	Frontend dynamically updates with the current weather and an icon.

2. Geolocation & Mapping
	•	Interactive Leaflet.js map shows the city location.
	•	Map automatically centers and zooms to the city coordinates returned by the weather API.
	•	Marker popup displays the city name.

3. Local News
	•	Fetches latest news headlines related to the city using NewsAPI.
	•	Displays article titles, source names, and publication dates.
	•	Handles missing images gracefully.

4. Smart Currency Converter
	•	Detects the local currency using country code from the weather API.
	•	Converts from USD to local currency using ExchangeRate-API.
	•	Displays real-time conversion rates on the frontend.

⸻

Tech Stack
	•	Frontend: HTML5, CSS3 (Grid/Flexbox), JavaScript (ES6+), Leaflet.js
	•	Backend: Node.js, Express.js
	•	Utilities: Axios, Dotenv
	•	APIs: OpenWeatherMap, NewsAPI, ExchangeRate-API

⸻

Installation & Setup

1. Prerequisites
	•	Node.js installed

2. Clone/Download
```
git clone <your-repo-url>
cd weather-api-app
```
3. Install Dependencies
```
npm install
```
4. Configure .env File

Create .env in the root folder and add:
```
PORT=3000
OPENWEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_news_key
CURRENCY_API_KEY=your_currency_key
```
5. Run the Server
```
node server.js
```
6. Access the App

Open your browser:
```
http://localhost:3000
```