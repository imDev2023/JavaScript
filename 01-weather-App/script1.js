const apiKey = "1e1663a6e6910a402367b1649db07ad5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=london";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}&units=metric`);
  let data = response.json();
  console.log(data)
}
checkWeather();

const searchBox = document.querySelector('.search')