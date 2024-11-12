import { fetchWeatherApi } from 'openmeteo'

async function getCoordinates(city) {
  const cities = {
    torello: { latitude: 42.0502, longitude: 2.2647 },
    barcelona: { latitude: 41.3851, longitude: 2.1734 },
    madrid: { latitude: 40.4168, longitude: -3.7038 },
  }
  return cities[city.toLowerCase()] || null
}

// Funció per crear un rang de temps basat en el valor d'inici, final i interval
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

async function getWeather() {
  const city = document.getElementById('cityInput').value
  const coords = await getCoordinates(city)

  if (!coords) {
    document.getElementById('forecast').innerHTML =
      `<p>La ciutat "${city}" no es troba a la llista.</p>`
    return
  }

  const params = {
    latitude: coords.latitude,
    longitude: coords.longitude,
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'precipitation_probability_max',
    ],
    timezone: 'Europe/Madrid',
    forecast_days: 3,
  }

  const url = 'https://api.open-meteo.com/v1/forecast'
  const responses = await fetchWeatherApi(url, params)
  const response = responses[0]
  console.log(response)

  // Obtenir la zona horària i altres atributs des de la resposta
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const daily = response.daily()
  console.log(daily)

  // Crear l'objecte `weatherData` utilitzant `range` per generar les dates
  const weatherData = {
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) =>
        new Date((t + utcOffsetSeconds) * 1000).toLocaleDateString('es-ES')
      ),

      // Arrodonim els valors a nombres enters
      temperature2mMax: daily
        .variables(0)
        .valuesArray()
        .map((value) => Math.round(value)),
      temperature2mMin: daily
        .variables(1)
        .valuesArray()
        .map((value) => Math.round(value)),
      precipitationSum: daily
        .variables(2)
        .valuesArray()
        .map((value) => Math.round(value)),
      precipitationProbabilityMax: daily
        .variables(3)
        .valuesArray()
        .map((value) => Math.round(value)),
    },
  }

  // Genera el contingut HTML per mostrar la previsió
  let forecastHtml = `<h2>Previsió per a ${city}</h2>`
  for (let i = 0; i < weatherData.daily.time.length; i++) {
    forecastHtml += `
      <div>
        <p><strong>Data:</strong> ${weatherData.daily.time[i]}</p>
        <p><strong>Temperatura màxima:</strong> ${weatherData.daily.temperature2mMax[i]}°C</p>
        <p><strong>Temperatura mínima:</strong> ${weatherData.daily.temperature2mMin[i]}°C</p>
        <p><strong>Precipitació acumulada:</strong> ${weatherData.daily.precipitationSum[i]} mm</p>
        <p><strong>Probabilitat de precipitació:</strong> ${weatherData.daily.precipitationProbabilityMax[i]}%</p>
        <hr>
      </div>
    `
  }

  document.getElementById('forecast').innerHTML = forecastHtml
}

// Afegeix l'escolta d'esdeveniment de clic per al botó "Obtenir Previsió"
document
  .getElementById('getWeatherButton')
  .addEventListener('click', getWeather)
