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

export const findWeatherForecast = (zipCode) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${process.env.API_KEY}`)
  .then(res => res.json())
    .then(res => {
      if(res.cod==="404"){
        return false
      } else {


        const hourlyData = res.list.map(element => {

          const date = new Date(1000 * (element.dt + res.city.timezone));
          return (
            {
              dayOfWeek: dayOfWeekText(date.getUTCDay()),
              time: readableTime(date.getUTCHours()),
              temperature: Math.round((element.main.temp - 273.15) * (9/5) + 32),
              temperatureC: Math.round((element.main.temp - 273.15)),
              icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
              condition: element.weather[0].main,
              wind: Math.round(element.wind.speed),
              windK: Math.round(element.wind.speed * 1.60934),
              humidity: element.main.humidity
            }
          )


        })

        function readableTime(hours) {
          if(hours > 0 && hours <= 12){
            return `${hours}AM`
          } else if(hours >= 13 && hours < 24){
            return `${hours-12}PM`
          } else {
            return '12AM'
          }
        }

        function dayOfWeekText(i) {
          const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

          return arr[i]
        }


      return (


        {
          zipCode: zipCode,
          city: res.city.name,
          hourlyWeatherArray: hourlyData
        }
      )}
    })

}
