const weather = 'https://api.openweathermap.org/data/2.5/weather?q=perth&units=metric&appid=a16a3ff4bd0eb2feb620a341adc49d95';

async function getWeather() {
    const response = await fetch(weather);
    const data = await response.json();
    console.log(data);
    console.log(data.weather[0].icon);
    console.log(data.main.temp);
    console.log(data.main.feels_like);
    console.log(data.weather[0].description);
    console.log(data.main.humidity);
    console.log(data.main.temp_min);
    console.log(data.main.temp_max);

    const weatherIcon = (data.weather[0].icon);
    const currenttemp = (data.main.temp);
    const weatherDescription = (data.weather[0].description);
    const feelsLike = (data.main.feels_like);
    const humidity = (data.main.humidity);
    const tempMin = (data.main.temp_min);
    const tempMax = (data.main.temp_max);

    document.querySelector('.weather-icon').src = "http://openweathermap.org/img/wn/" + (weatherIcon) + "@2x.png"
    document.getElementById('current-temp').textContent = `${Math.round(currenttemp)}°c`;
    document.getElementById('feels-like').textContent = `But it feels like ${Math.round(feelsLike)}°c`;
    document.getElementById('weather-description').textContent = (weatherDescription);
    document.getElementById('humidity').textContent = `Humidity: ${humidity} g/m3`;
    document.getElementById('min-max-temp').textContent = `${Math.round(tempMin)}°c / ${Math.round(tempMax)}°c`;
}

getWeather();