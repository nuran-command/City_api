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

API Documentation (Backend Endpoints)

The frontend communicates with server-side endpoints only; API keys are never exposed to the browser.
1. Weather Endpoint
```
GET /api/weather?city=<CITY_NAME>
```
```

{
  "city": "Almaty",
  "country": "KZ",
  "temperature": 4.95,
  "feels_like": 3.31,
  "humidity": 61,
  "pressure": 1014,
  "wind": 2,
  "description": "smoke",
  "icon": "50d",
  "lat": 43.25,
  "lon": 76.95,
  "rain_3h": 0
}
```
2. News Endpoint
```
GET /api/news?city=<CITY_NAME>
```
```
{
  "city": "Almaty",
  "articles": [
    {
      "title": "News Title",
      "source": "Source Name",
      "url": "https://example.com",
      "publishedAt": "2025-12-27T22:00:00Z"
    }
  ]
}
```
3. Currency Endpoint
```
GET /api/currency?country=<COUNTRY_CODE>
```
```
{
  "base": "USD",
  "currency": "KZT",
  "rate": 503.7243
}
```
#Postman Testing

##Weather API

Request: GET http://localhost:3000/api/weather?city=Almaty
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.35.45.png" alt="Dashboard" width="800">

News API

Request: GET http://localhost:3000/api/news?city=Almaty
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.36.12.png" alt="Dashboard" width="800">

Currency API

Request: GET http://localhost:3000/api/currency?country=KZ
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.36.27.png" alt="Dashboard" width="800">	

Error Handling

Request: GET http://localhost:3000/api/weather?city=invalidcity
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.37.04.png" alt="Dashboard" width="800">
<br>	
#Frontend Screenshots:
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.39.33.png" alt="Dashboard" width="800">
<br>
<img src="images/Снимок экрана 2025-12-29 в 15.39.40.png" alt="Dashboard" width="800">

```
weather-api-app/
├─ .env                  # Environment variables
├─ server.js             # Backend server
├─ package.json          # Dependencies
├─ routes/               # API routes
│   ├─ weather.js
│   ├─ news.js
│   └─ currency.js
├─ services/             # External API services
│   ├─ weatherService.js
│   ├─ newsService.js
│   └─ currencyService.js
└─ public/               # Frontend
    ├─ index.html
    ├─ css/style.css
    └─ js/main.js
```

Key Design Decisions

Server-Side API Proxying
	•	All API calls go through backend routes to hide API keys.
	•	Prevents keys from being exposed in the frontend network requests.

Leaflet.js Map
	•	Free and open-source mapping library.
	•	No API key required, easy to implement with interactive markers.

Currency Auto-Detection
	•	Uses country code from weather API to select the correct currency automatically.
	•	Improves UX by removing the need for manual currency selection.

Rain Volume Standardization
	•	Ensures rain_3h is always present (default 0) even if OpenWeather API omits it.