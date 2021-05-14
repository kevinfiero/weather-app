import React from 'react'
import PropTypes from 'prop-types'
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  gridItem: {
    margin: 10
  },

  gridContainer: {
    justifyContent: "center"
  }
})

const TemperatureCardList = ({currentWeatherArray}) => {
  const classes = useStyles();


  const cardElements = currentWeatherArray.map((card) => (
    <Grid item key={card.zipCode} className={classes.gridItem}>
      <TemperatureCard 
      weatherInfo = {card}
      />
    </Grid>
))

  return (
    <>
      <Grid container className = {classes.gridContainer}>{cardElements}</Grid>
    </>

  )
}

TemperatureCardList.propTypes = {

}

export default TemperatureCardList
