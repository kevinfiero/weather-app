import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 120,
    width: 180,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
    margin: "auto"
  }
});

const CityInfo = ({ zip, city }) => {
  const classes = useStyles();
  return (
      <Card className={classes.card}>
        <h2>{city}</h2>
        <h3>{zip}</h3>
      </Card>
  )
}

CityInfo.propTypes = {

}

export default CityInfo
