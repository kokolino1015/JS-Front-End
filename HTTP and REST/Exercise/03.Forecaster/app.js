function attachEvents() {
    const location = document.getElementById('location');
    const searchedWeather = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const CURRENT_CONDITIONS_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    searchedWeather.addEventListener('click', placeSearchHandler)
    let codeOfPlace = null;
    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    };

    function placeSearchHandler() {
        fetch(BASE_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (const dataKey of data) {
                    if (location.value === dataKey.name) {
                        codeOfPlace = dataKey.code;
                    }
                }
            }).then(() => {
            fetch(`${CURRENT_CONDITIONS_URL}${codeOfPlace}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    forecast.style.display = 'block';
                    const weatherIconCode = data.forecast.condition;
                    const iconCode = weatherSymbols[weatherIconCode];
                    current.innerHTML = `
                        <div class="forecasts">
                            <span class="condition symbol">${iconCode}</span>
                            <span class="condition">
                                <span class="forecast-data">${data.name}</span>
                                <span class="forecast-data">${data.forecast.low}&#176/${data.forecast.high}&#176</span>
                                <span class="forecast-data">${weatherIconCode}</span>
                            </span>
                        </div>
                        `
                }).catch(() => {
                forecast.style.display = 'block';
                forecast.innerHTML = 'Error';
            })
        }).then(() => {
            fetch(`${UPCOMING_URL}${codeOfPlace}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    upcoming.innerHTML = '';
                    const forecastInfoDiv = document.createElement('div');
                    forecastInfoDiv.classList.add('forecast-info');
                    for (const day of data.forecast) {
                        const weatherIcon = weatherSymbols[day.condition];
                        forecastInfoDiv.innerHTML += `
                            <span class="upcoming">
                                <span class="symbol">${weatherIcon}</span>
                                <span class="forecast-data">${day.low}&#176/${day.high}&#176</span>
                                <span class="forecast-data">${day.condition}</span>
                            </span>
                        `;
                        upcoming.appendChild(forecastInfoDiv);
                    }
                }).catch(() => {
                forecast.style.display = 'block';
                forecast.innerHTML = 'Error';
            })

        }).catch(() => {
            forecast.style.display = 'block';
            forecast.innerHTML = 'Error';
        })
    }
}

attachEvents();