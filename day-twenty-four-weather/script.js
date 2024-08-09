    const apiKey = "API_KEY";  
    
    function getWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the weather data to the console
    
                // Extract the necessary data from the response
                const temperature = data.main.temp;
                const weatherCondition = data.weather[0].description;
                const cityName = data.name;
                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
                // Update the DOM with the weather information
                const weatherInfoDiv = document.getElementById('weather-info');
                weatherInfoDiv.innerHTML = `
                    <h2>${cityName}</h2>
                    <img src="${iconUrl}" alt="${weatherCondition}">
                    <p>Temperature: ${temperature}°C</p>
                    <p>Condition: ${weatherCondition}</p>
                `;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }


    function getWeatherForecast(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the forecast data to the console
    
                // Extract and display the 5-day forecast
                displayForecast(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
// Function to parse and display the 5-day weather forecast
function displayForecast(data) {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast');

    // Filter the data to get the forecast for each day at 12:00 PM
    const dailyForecasts = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
        const temperature = forecast.main.temp;
        const weatherCondition = forecast.weather[0].description;
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h3>${date}</h3>
            <img src="${iconUrl}" alt="${weatherCondition}">
            <p>Temp: ${temperature}°C</p>
            <p>${weatherCondition}</p>
        `;
        forecastDiv.appendChild(forecastItem);
    });

    // Clear previous forecast and add the new one
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = ''; // Clear previous content
    weatherInfoDiv.appendChild(forecastDiv);
}
// Event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city); // Fetch and display current weather for the entered city
        getWeatherForecast(city); // Fetch and display 5-day forecast
    } else {
        alert('Please enter a city name.');
    }
});  

function displayForecast(data) {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast');

    // Filter the data to get the forecast for each day at 12:00 PM
    const dailyForecasts = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
        const temperature = forecast.main.temp;
        const weatherCondition = forecast.weather[0].description;
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h3>${date}</h3>
            <img src="${iconUrl}" alt="${weatherCondition}" class="weather-icon">
            <p>Temp: ${temperature}°C</p>
            <p>${weatherCondition}</p>
        `;
        forecastDiv.appendChild(forecastItem);
    });

    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = ''; // Clear previous content
    weatherInfoDiv.appendChild(forecastDiv);

    // Ensure all images have loaded before applying the transition
    const icons = document.querySelectorAll('.weather-icon');
    icons.forEach((icon, index) => {
        icon.onload = () => {
            setTimeout(() => {
                icon.classList.add('show');
                if (index === icons.length - 1) {
                    document.querySelectorAll('.forecast-item').forEach(item => item.classList.add('show'));
                }
            }, 100 * index); // Add a delay for each icon to stagger the animation
        };
    });
}