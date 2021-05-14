export const findCurrentWeather = (zipCode) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.API_KEY}`)
  .then(res => res.json())
    .then(res => {
      return (
        {
          zipCode: zipCode,
          city: res.name,
          temperature: Math.round((res.main.temp - 273.15) * (9/5) + 32),
          icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
          condition: res.weather[0].main,
          wind: Math.round(res.wind.speed),
          humidity: res.main.humidity
        }
      )
    })
}
