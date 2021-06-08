import React from 'react'
import PropTypes from 'prop-types'
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  gridItem: {
    margin: 10,
  },
  gridContainer: {
    justifyContent: "center",
  }
})

const TemperatureCardList = ({ currentWeatherArray, handleDeleteCard, isFahrenheit }) => {
  const classes = useStyles();

  const cardElements = currentWeatherArray.map((card) => (
    <Grid item key={card.zipCode} className={classes.gridItem}>
      <TemperatureCard 
      weatherInfo = {card}
      handleDeleteCard = {handleDeleteCard}
      isFahrenheit = {isFahrenheit}
      />
    </Grid>
))

  return (
    <Grid container className = {classes.gridContainer}>{cardElements}</Grid>
  )
}

TemperatureCardList.propTypes = {
  currentWeatherArray: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureC: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    windK: PropTypes.number.isRequired,
    zipCode: PropTypes.string.isRequired
  })).isRequired, 
  handleDeleteCard: PropTypes.func.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
}

export default TemperatureCardList
