import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Switch, withStyles } from '@material-ui/core'

const useStyles = makeStyles({
  toggle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  temp: {
    marginTop: "auto",
    marginBottom: "auto",
  }
})

const CustomSwitch = withStyles({
  colorPrimary: {
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#457b9d",
      borderColor: "#457b9d"
    }
  },
  track: {
    backgroundColor: "#457b9d"
  },
  thumb: {
    backgroundColor: "#457b9d"
  }
})(Switch);

const Toggle = ({ isFahrenheit, handleTemperatureSwitch }) => {
  const classes = useStyles();
  return (
      <div className={classes.toggle}>
        <span className={classes.temp}>°C</span>
        <CustomSwitch
          className={classes.toggle}
          onClick={handleTemperatureSwitch}
          checked={isFahrenheit}
          name="checkedB"
          color="primary"
        />
        <span className={classes.temp}>°F</span>
        </div>
  )
}

Toggle.propTypes = {
  isFahrenheit: PropTypes.bool.isRequired, 
  handleTemperatureSwitch: PropTypes.func.isRequired,  
}

export default Toggle
