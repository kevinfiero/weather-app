export const findCurrentWeather = (zipCode) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.API_KEY}`)
  .then(res => res.json())
    .then(res => {
      if(res.cod==="404"){
        return false
      } else {
      return (
        {
          zipCode: zipCode,
          city: res.name,
          temperature: Math.round((res.main.temp - 273.15) * (9/5) + 32),
          temperatureC: Math.round((res.main.temp - 273.15)),
          icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
          condition: res.weather[0].main,
          wind: Math.round(res.wind.speed),
          windK: Math.round(res.wind.speed * 1.60934),
          humidity: res.main.humidity
        }
      )}
    })
}
