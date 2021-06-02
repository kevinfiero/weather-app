import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
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
    direction: "row",
  },
  text: {
    margin: "auto"
  }
});

const HourlyCard = ({ card }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center">
        <Grid item>{`${card.dayOfWeek} ${card.time}`}</Grid>
        <Grid item>{`${card.temperature}°F`}</Grid>
        <Grid item className={classes.padding}><img src={card.icon} className={classes.media} /></Grid>
        <Grid item className={classes.row}>
          <img src={humidityIcon} className={classes.icons} />
          <div className={classes.text}>{`${card.humidity}%`}</div>
        </Grid>
        <Grid item className={classes.row}>
          <img src={windIcon} className={classes.icons} />          
          <div className={classes.text}>{`${card.wind} mph`}</div>
        </Grid>
      </Grid>
    </Card>
  )
}

HourlyCard.propTypes = {

}

export default HourlyCard
