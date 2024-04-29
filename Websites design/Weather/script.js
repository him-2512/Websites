let cityName = document.querySelector(".search-bar").value;
console.log(cityName);

document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    if (event.key == 'Enter') {
        checkWeather();
    }
})


const apiKey = '116d086a7457851781326a1b880b8ea0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'


async function checkWeather() {
    let cityName = document.querySelector(".search-bar").value;
    console.log(cityName);
    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".cityName").innerHTML = cityName;

    let windSpeed = data.wind.speed;
    document.querySelector(".wind-speed>h3").innerHTML = windSpeed + ' kmph';

    let temp = data.main.temp;
    document.querySelector(".temp").innerHTML = temp + '°C';

    let humidity = data.main.humidity;
    document.querySelector(".humidity>h3").innerHTML = humidity + '%';

    let weather = data.weather[0].main;
    console.log(weather);
    let img = document.querySelector(".weather-icon");
    img.setAttribute("src", `images/${weather}.png`);
}