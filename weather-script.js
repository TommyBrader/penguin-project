// Weather
function loadWeatherApp() {
  const weatherForm = document.querySelector('#weather-search form')
  weatherForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const API_KEY = '4cd4c4999567d4caa14b0d94b58714bd'
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com'
    const weatherInputValue = weatherForm.elements.weatherInput.value
    fetch(`${PROXY_URL}/https://api.openweathermap.org/data/2.5/weather?q=${weatherInputValue}&appid=${API_KEY}&units=metric`).then(function(res) {
      return res.json()
    }).then(function(data) {
      clearWeatherInfo()
      displayWeatherInfo(data)
    })
  })
}

function clearWeatherInfo() {
  const weatherInfoSection = document.querySelector('#weather-information')
  weatherInfoSection.innerHTML = ''
}

function displayWeatherInfo(data) {
  const weatherInfoSection = document.querySelector('#weather-information')

  // const locationHeader = document.createElement('h2')
  // locationHeader.textContent = data.name

  // const temp = document.createElement('h6')
  // temp.innerHTML = `Temperature: ${Math.round(data.main.temp)}&#8451;`

  // const icon = document.createElement('img')
  // icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  // weatherInfoSection.appendChild(locationHeader)
  // weatherInfoSection.appendChild(temp)
  // weatherInfoSection.appendChild(icon)

  const hoursDifferent = parseInt(data.timezone)/3600
  weatherInfoSection.innerHTML = `<h2 class="sub-sub-title">Result:</h2>
  <article id="weather-result">
    <figure>
      <figcaption id="place-name">${data.name}</figcaption>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" id="weather-icon" />
      <figcaption>
        <b class="weather-categories">Timezone: </b>UTC ${(hoursDifferent<0?'':'+') + hoursDifferent} hour(s)
      </figcaption>
      <figcaption>
        <b class="weather-categories">Temperature: </b>${Math.round(data.main.temp)}&#8451
      </figcaption>
      <figcaption>
      <b class="weather-categories">Weather Description: </b>${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
    </figcaption>
      <figcaption>
        <b class="weather-categories">Longitude: </b>${data.coord.lon}
      </figcaption>
      <figcaption>
        <b class="weather-categories">Latitude: </b>${data.coord.lat}
      </figcaption>
    </figure>
  </article>`
}

loadWeatherApp()