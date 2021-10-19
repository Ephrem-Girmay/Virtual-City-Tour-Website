const weatherSthlm = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=a16a3ff4bd0eb2feb620a341adc49d95';

async function getSthlmWeather() {
    const response = await fetch(weatherSthlm);
    const data = await response.json();
    console.log(data);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.weather[0].icon);

    const currenttemp = (data.main.temp);
    const weatherDescription = (data.weather[0].description);
    const weatherIcon = (data.weather[0].icon);

    document.getElementById('current-temp').textContent = `${Math.round(currenttemp)}°c`;
    document.getElementById('weather-description').textContent = (weatherDescription);
    document.querySelector('.weather-icon').src = "http://openweathermap.org/img/wn/" + (weatherIcon) + "@2x.png"
}

getSthlmWeather();