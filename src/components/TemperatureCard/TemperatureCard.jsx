import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import humidityIcon from '../../assets/humidity.svg'
import windIcon from '../../assets/wind.svg'
import styles from './TemperatureCard.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 360,
    width: 180,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
    margin: "auto",
  },
  media: {
    height: "20%",
    width: "50%",
    margin: "auto",
    backgroundSize: "contain",
  },
  icons: {
    width: "20px",
    height: "20px"
  }
});

const TemperatureCard = ({weatherInfo, handleDeleteCard}) => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if(isVisible === false){
      setTimeout(() => {handleDeleteCard(weatherInfo.zipCode)}, 3000);
    }
  }, [isVisible])

  return (
    <div className={styles.grow} >
    <div className={isVisible?styles.fadeInImage:styles.fadeOutImage}>
      <Card className={classes.card}>
        <h2>{weatherInfo.city}</h2>
        <h3>{weatherInfo.zipCode}</h3>
        <CardMedia
          image={weatherInfo.icon}
          className={classes.media}
        />
        <CardContent>
          <div>{`${weatherInfo.temperature}°F`}</div>
          <div>{weatherInfo.condition}</div>
        </CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardContent>
            <img src={humidityIcon} className={classes.icons} />
            <div>{`${weatherInfo.humidity}%`}</div>
          </CardContent>
          <CardContent>
            <img src={windIcon} className={classes.icons} />
            <div>{`${weatherInfo.wind} MPH`}</div>
          </CardContent >
          <IconButton onClick={() => {setIsVisible(false); }}>
            <HighlightOffIcon fontSize="small" color="error" />
          </IconButton>
        </Grid>
      </Card>
    </div>
    </div>

  )
}

TemperatureCard.propTypes = {

}

export default TemperatureCard
