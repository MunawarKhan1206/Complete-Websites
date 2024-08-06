
const apikey = "b1b35bba21478edce007111d09a50b0c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=9eff7f8235de161769a1134601e1c089&units=metric";

function getWeather() {
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayWeather(data));
}

