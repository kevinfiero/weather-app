import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from '@material-ui/core'
import HourlyCard from '../HourlyCard/HourlyCard'

const HourlyCardList = ({hourlyWeatherArray, loading}) => {

  let cardElements = []

if(!loading){
  cardElements = hourlyWeatherArray.map((card) => (
    <Grid item key={`${card.dayOfWeek}${card.time}`}>
        <HourlyCard card={card}/>
    </Grid>
  ))
}

console.log(loading, hourlyWeatherArray);

  return (
    <>
      {!loading ? <Grid container direction="column">{cardElements}</Grid> : 'Please Wait'}
    </>
  )
}

HourlyCardList.propTypes = {

}

export default HourlyCardList
