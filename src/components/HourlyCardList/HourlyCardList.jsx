import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, makeStyles } from '@material-ui/core'
import HourlyCard from '../HourlyCard/HourlyCard'

const useStyles = makeStyles({

  gridItem: {
    margin: "5px"
  },
  grid: {
    textAlign: "center",
    justify: "center",
    justifyItems: "center",
    alignItems: "center",
    align: "center"
  }
})

const HourlyCardList = ({hourlyWeatherArray, loading}) => {
  const classes = useStyles();


  let cardElements = []


if(!loading){
  cardElements = hourlyWeatherArray.map((card) => (
    <Grid item key={`${card.dayOfWeek}${card.time}`} className = {classes.gridItem} >
        <HourlyCard card={card}/>
    </Grid>

  ))
}
  return (
    <>
      {!loading ? <Grid container className = {classes.grid} direction="column">{cardElements}</Grid> : 'Please Wait'}
    </>
  )
}

HourlyCardList.propTypes = {

}

export default HourlyCardList
