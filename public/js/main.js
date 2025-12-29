const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");
const newsDiv = document.getElementById("news");
const currencyDiv = document.getElementById("currency");

let map;
let marker;

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return;

  loadWeather(city);
  loadNews(city);
});

async function loadWeather(city) {
  const res = await fetch(`/api/weather?city=${city}`);
  const data = await res.json();

  if (!res.ok) {
    weatherDiv.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  weatherDiv.innerHTML = `
    <h2>${data.city}, ${data.country}</h2>
    <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">
    <p>${data.description}</p>
    <p><strong>${data.temperature}°C</strong> (feels like ${data.feels_like}°C)</p>
    <p>Humidity: ${data.humidity}% | Pressure: ${data.pressure} hPa</p>
    <p>Wind: ${data.wind} m/s</p>
  `;

  showMap(data.lat, data.lon, data.city);
  loadCurrency(data.country);
}

async function loadNews(city) {
  const res = await fetch(`/api/news?city=${city}`);
  const data = await res.json();

  if (!res.ok) {
    newsDiv.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  newsDiv.innerHTML = `
    <h2>Latest News</h2>
    <ul>
      ${data.articles
        .map(
          a => `
        <li>
          <a href="${a.url}" target="_blank">${a.title}</a><br>
          <small>${a.source}</small>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}

async function loadCurrency(country) {
  const res = await fetch(`/api/currency?country=${country}`);
  const data = await res.json();

  if (!res.ok) {
    currencyDiv.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  currencyDiv.innerHTML = `
    <h2>Currency</h2>
    <p>Base: ${data.base}</p>
    <p><strong>1 USD = ${data.rate} ${data.currency}</strong></p>
  `;
}

function showMap(lat, lon, city) {
  if (!map) {
    map = L.map("map").setView([lat, lon], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);
  } else {
    map.setView([lat, lon], 10);
    marker.remove();
  }

  marker = L.marker([lat, lon]).addTo(map).bindPopup(city).openPopup();
}