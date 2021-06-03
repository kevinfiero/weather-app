import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, makeStyles } from '@material-ui/core';
import windIcon from '../../assets/wind.svg'
import humidityIcon from '../../assets/humidity.svg'

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    height: 50,
    width: 500,
    direction: "row",
    textAlign: "center",
    justify: "center",
    justifyItems: "center",
    alignItems: "center",
    align: "center"
  },
  media: {
    height: "20%",
    width: "50%",
    margin: "auto",
    backgroundSize: "contain",
    margin: "0px"
  },
  icons: {
    width: "20px",
    height: "20px",
    padding: "0px",
    margin: "5px"
  },
  row: {
    display: "flex",
    direction: "row"
  },
  datetime: {
    width: "110px",
    textAlign: "left",
  },
  humidity: {
    width: "35px",
    textAlign: "left",
    margin: "auto"
  },
  wind: {
    width: "50px",
    textAlign: "left",
    margin: "auto"
  }
});

const HourlyCard = ({ card, isFahrenheit }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center">
        <Grid item className={classes.datetime}>{`${card.dayOfWeek} ${card.time}`}</Grid>
        <Grid item>{isFahrenheit ? `${card.temperature}°F` : `${card.temperatureC}°C`}</Grid>
        <Grid item className={classes.padding}><img src={card.icon} className={classes.media} /></Grid>
        <Grid item className={classes.row}>
          <img src={humidityIcon} className={classes.icons} />
          <div className={classes.humidity}>{`${card.humidity}%`}</div>
        </Grid>
        <Grid item className={classes.row}>
          <img src={windIcon} className={classes.icons} />
          <div className={classes.wind}>{isFahrenheit ? `${card.wind} mph` : `${card.windK} km/h`}</div>
        </Grid>
      </Grid>
    </Card>
  )
}

HourlyCard.propTypes = {
  card: PropTypes.shape({
    dayOfWeek: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureC: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windK: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired,
  isFahrenheit: PropTypes.bool.isRequired
}

export default HourlyCard
