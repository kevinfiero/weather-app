import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, Grid, makeStyles } from '@material-ui/core'
import humidityIcon from '../../assets/humidity.svg'
import windIcon from '../../assets/wind.svg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 250,
    width: 180,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",

  },
  media: {
    height: "70px",
    width: "70px",
    margin: "auto",
    backgroundSize: "contain",
  },
  icons: {
    width: "20px",
    height: "20px",
    padding: "0px"
  },
  statCards: {
    padding: "10px",
  },
  link: {
    textDecoration: "none"
  }

});

const ZipCurrentWeather = ({currentWeather, isFahrenheit}) => {
  const classes = useStyles();

  let temperature;
  let wind;

  if (isFahrenheit) {
    temperature = <div>{`${currentWeather.temperature}°F`}</div>
    wind = <div>{`${currentWeather.wind} mph`}</div>
  } else {
    temperature = <div>{`${currentWeather.temperatureC}°C`}</div>
    wind = <div>{`${currentWeather.windK} km/h`}</div>
  }

  return (
    <Card className={classes.card}>
      <h2>Current</h2>
      <img src={currentWeather.icon} className={classes.media}/>
      <div>{temperature}</div>
      <div>{currentWeather.condition}</div>
      <Grid container direction="row" justify="center" alignItems="center">
      <div className={classes.statCards}>
        <img src={humidityIcon} className={classes.icons} />
        <div>{wind}</div>
      </div>

      <div className={classes.statCards}>
        <img src={windIcon} className={classes.icons} />
        <div>{wind}</div>
      </div>
      </Grid>
    </Card>
  )
}

ZipCurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureC: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windK: PropTypes.number.isRequired,
    zipCode: PropTypes.string.isRequired
  }).isRequired, 
  isFahrenheit: PropTypes.bool.isRequired
}

export default ZipCurrentWeather
