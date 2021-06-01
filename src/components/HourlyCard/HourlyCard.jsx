import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    height: 50,
    width: 800,
    direction: "row",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
    margin: "auto"
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
    textDecoration: "none"
  },
  content: {
    flexDirection: "row",
    direction: "row",
    width: "500px"
  }

});

const HourlyCard = ({ card }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>{card.dayOfWeek}</Grid>
        <Grid item>{card.time}</Grid>
        <Grid item><img src={card.icon} className={classes.media} /></Grid>
        <Grid item>{card.humidity}</Grid>
        <Grid item>{card.condition}</Grid>
        <Grid item>{card.temperature}</Grid>
        <Grid item>{card.wind}</Grid>
      </Grid>
    </Card>
  )
}

HourlyCard.propTypes = {

}

export default HourlyCard
