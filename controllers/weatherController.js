const axios = require('axios');

const apiKey = '1746c67a89ad49a9afb135727241704'; // Replace with your WeatherAPI API key

exports.getWeather = async (req, res, next) => {
  try {
    const city = req.params.city;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

    const response = await axios.get(url);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    next(error);
  }
};
