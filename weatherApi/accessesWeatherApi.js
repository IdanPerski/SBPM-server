const axios = require("axios");
const terminalColors = require("../chalk/terminalColors");
const { handleError } = require("../utils/handleErrors");

const apiKey = "ce01827d3fc7e96a3c653254a32c4c3b";
//needs to go to env file
axios;
const getWeatherIcon = async (cityName) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data.weather || data.weather.length === 0) {
      throw new Error("No weather data found");
    }

    const icon = data.weather[0].icon;

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const iconImg = `<img src=${iconUrl}>`;
    return iconImg;
  } catch (error) {
    console.error("Error fetching weather API:", error);
    handleError(res, 400, `Error fetching weather API: ${error}`);
  }
};

/* ------Daily Forecast 16 days------- */

//needs to be paid

// TODO=

//search 16 day weather forecast with daily average parameters by city name. All weather data can be obtained in JSON and XML formats.

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

// documantion link: openweathermap.org/forecast16#16days`

https: module.exports = getWeatherIcon;
