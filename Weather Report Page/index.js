const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const api = `2906cbdac661f6303106e1176e41f1af`;

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value.toLowerCase();
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }else{
        displayError("please enter a city.");
    }
});

async function getWeatherData(city){
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data of given city");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city, main: {humidity, temp}, weather:[{id, description}] }=data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const desDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    desDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    desDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.append(cityDisplay);
    card.append(tempDisplay);
    card.append(humidityDisplay);
    card.append(desDisplay);
    card.append(weatherEmoji);
    
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "💨";
        case (weatherId === 800):
            return "☀️";
        case (weatherId > 800 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(errMsg){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = errMsg;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.append(errorDisplay);
}