const apiKey = "6e22ddaeaaff4f5a802151701261705";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");


async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.innerText = data.location.name;

        temperature.innerText = `${data.current.temp_c}°C`;

        description.innerText = data.current.condition.text;

        humidity.innerText = `${data.current.humidity}%`;

        wind.innerText = `${data.current.wind_kph} km/h`;

        weatherIcon.src = data.current.condition.icon;

    } 
    catch (error) {

        alert(error.message);

    }
}


searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city !== "") {
        getWeather(city);
    }

});


cityInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const city = cityInput.value.trim();

        if (city !== "") {
            getWeather(city);
        }
    }
});