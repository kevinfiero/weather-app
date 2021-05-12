import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 450,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
    margin: "auto",
  },
  media: {
    height: "50%",
    width: "50%",
    margin: "auto",
    backgroundSize: "contain",
  }
});

const TemperatureCard = ({weatherInfo}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <h1>{weatherInfo.zipCode}</h1>
    <CardMedia
      image={weatherInfo.icon}
      className={classes.media}
    />
    <CardContent>
      <div>Temperature</div>
      <div>{`${weatherInfo.temperature}°F`}</div>
      <div>{weatherInfo.condition}</div>
    </CardContent>
    <Grid container direction="row" justify="center" alignItems="center">
      <CardContent>
        <div>Humidity</div>
        <div>{`${weatherInfo.humidity}%`}</div>
      </CardContent>
      <CardContent>
        <div>Wind</div>
        <div>{`${weatherInfo.wind} MPH`}</div>
      </CardContent >
    </Grid>
  </Card>
  )
}

TemperatureCard.propTypes = {

}

export default TemperatureCard
