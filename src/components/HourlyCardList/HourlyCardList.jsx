import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const HourlyCardList = ({hourlyWeatherArray, loading}) => {

  let cardElements = []

if(!loading){
  cardElements = hourlyWeatherArray.map((card) => (
    <Grid item key={`${card.dayOfWeek}${card.time}`}>
        <h1>{card.dayOfWeek}</h1>
    </Grid>
  ))
}

console.log(loading, hourlyWeatherArray);

  return (
    <>
      {!loading ? <Grid container>{cardElements}</Grid> : 'Please Wait'}
    </>
  )
}

HourlyCardList.propTypes = {

}

export default HourlyCardList
