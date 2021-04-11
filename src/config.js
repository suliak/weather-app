
const openWeatherMapToken = process.env.REACT_APP_OPENWEATHERMAP_TOKEN;
if (!openWeatherMapToken) {
  throw new Error('REACT_APP_OPENWEATHERMAP_TOKEN is not set')
}

const config = {
  openWeatherMapToken
}

export default config;