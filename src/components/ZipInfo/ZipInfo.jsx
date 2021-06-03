import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import backIcon from '../../assets/back.svg'
import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 250,
    width: 180,
    direction: "column",
    textAlign: "center",
    justify: "center",
    alignItems: "center",
  },
  icons: {
    width: "20px",
    height: "20px",
    padding: "0px",
    marginTop: "20px"
  },
  invisible: {
    opacity: "0"

  }
});

const CityInfo = ({ zip, city, isFahrenheit, handleTemperatureSwitch, loading }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {loading ? <h2 className = {classes.invisible}>city</h2> : <h2>{city}</h2>}
      {loading ? <h3 className = {classes.invisible}>zip</h3> : <h3>{zip}</h3>}
      <Toggle
        isFahrenheit={isFahrenheit}
        handleTemperatureSwitch={handleTemperatureSwitch}
      />
      <Link to={`/`}>
        <img src={backIcon} className={classes.icons} />
      </Link>
    </Card>
  )
}

CityInfo.propTypes = {
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
  handleTemperatureSwitch: PropTypes.func.isRequired
}

export default CityInfo
