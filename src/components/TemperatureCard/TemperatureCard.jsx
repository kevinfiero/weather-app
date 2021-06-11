import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import humidityIcon from '../../assets/humidity.svg'
import windIcon from '../../assets/wind.svg'
import styles from './TemperatureCard.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 375,
    width: 180,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
    margin: "auto",
    textDecoration: "none",
  },
  media: {
    height: "20%",
    width: "50%",
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
    textDecoration: "none",
    color: "black"
  }

});

const TemperatureCard = ({ weatherInfo, handleDeleteCard, isFahrenheit }) => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isVisible === false) {
      setTimeout(() => { handleDeleteCard(weatherInfo.zipCode) }, 3000);
    }
  }, [isVisible])

  return (
    <div className={styles.grow} >
      <div className={isVisible ? styles.fadeInImage : styles.fadeOutImage}>
        <Card className={classes.card}>
          <Link data-testid={`cardInfo-${weatherInfo.zipCode}`} to={`/zip/${weatherInfo.zipCode}`} className={classes.link} >
            <h2 className={classes.link}>{weatherInfo.city}</h2>
            <h3>{weatherInfo.zipCode}</h3>
            <CardMedia
              image={weatherInfo.icon}
              className={classes.media}
            />
            <CardContent>
            <div>{isFahrenheit ? `${weatherInfo.temperature}°F` : `${weatherInfo.temperatureC}°C`}</div>
              <div>{weatherInfo.condition}</div>
            </CardContent>
            <Grid container direction="row" justify="center" alignItems="center">
              <div className={classes.statCards}>
                <img src={humidityIcon} className={classes.icons} />
                <div>{`${weatherInfo.humidity}%`}</div>
              </div>
              <div className={classes.statCards}>
                <img src={windIcon} className={classes.icons} />
                <div>{isFahrenheit ? `${weatherInfo.wind} mph` : `${weatherInfo.windK} km/h`}</div>
              </div >
            </Grid>
          </Link>
          <IconButton data-testid={`delete-${weatherInfo.zipCode}`} onClick={() => { setIsVisible(false); }}>
            <HighlightOffIcon fontSize="small" color="error" />
          </IconButton>
        </Card>
      </div>
    </div>
  )
}

TemperatureCard.propTypes = {
  weatherInfo: PropTypes.shape({
    city: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureC: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windK: PropTypes.number.isRequired,
    zipCode: PropTypes.string.isRequired
  }),
  handleDeleteCard: PropTypes.func.isRequired, 
  isFahrenheit: PropTypes.bool.isRequired
  }

export default TemperatureCard
