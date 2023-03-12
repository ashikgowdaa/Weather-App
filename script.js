/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
// https://api.openweathermap.org/data/2.5/weather
/**
 * Retrieve weather data from openweathermap
 */

const getWeatherData = (city) => {

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial `;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
  console.log(respose.json())
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

const searchBox = document.getElementById("city-input");

searchBox.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    // Add code here to perform search action
    searchCity()
  }
});
/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("type").innerText = weatherData.weather[0].main;
  
let main=weatherData.weather[0].main
switch (main) {
  case "Snow":
  document.body.style.background =
  "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif') no-repeat";
  document.body.style.backgroundSize = '100%';
  break;
  case "Clouds":
  document.body.style.background =
  "url('https://i.makeagif.com/media/11-03-2015/tWS6ft.gif')";
  document.body.style.backgroundSize = '50%';
  break;
  case "Fog":
  document.body.style.background =
  "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
  document.body.style.backgroundSize = '100%';
  break;
  case "Rain":
  document.body.style.background =
  "url('https://gifdb.com/images/thumbnail/naughty-animated-cloud-wreaking-havoc-8d3saqhxtta2glcg.gif')";
  document.body.style.backgroundSize = '50%';
 
  document.body.style.backgroundPosition = 'centre';
  break;
  case "Clear":
  document.body.style.background =
  "url('https://thumbs.gfycat.com/DeadVeneratedGerenuk-size_restricted.gif')  ";
  
  document.body.style.backgroundSize = '5%';
  break;
  case "Thunderstorm":
  document.body.style.background =
  "url('https://cdn.shopify.com/s/files/1/0592/2698/0508/products/icon-1.1s-800pxcopy.gif?v=1634573330')";
  document.body.style.backgroundSize = '50%';
  break;
  default:
  document.body.style.background =
  "url('https://media.tenor.com/bC57J4v11UcAAAAM/weather-sunny.gif')";
  document.body.style.backgroundSize = '50%';
  break;
  }
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("pres").innerText = weatherData.main.pressure;
  document.getElementById("Hum").innerText = weatherData.main.humidity;

}