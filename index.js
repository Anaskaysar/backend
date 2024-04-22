const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace "YOUR_API_KEY" with your actual WeatherAPI key
const apiKey = "1746c67a89ad49a9afb135727241704";

// Define a route to fetch weather data
app.get('/weather', (req, res) => {
  // Replace "YOUR_CITY" with the desired city (can be passed as a query parameter e.g., /weather?city=London)
  const city = req.query.city || "london";

  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;

  axios.get(apiUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json({ error: "Error fetching weather data" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
