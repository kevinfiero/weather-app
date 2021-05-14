import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Switch, withStyles } from '@material-ui/core'
import styles from './Toggle.css'

const useStyles = makeStyles({
  track: {
    backgroundColor: "green"
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
    <div className={styles.toggle}>
      <div>
        <span>°C</span>
        <CustomSwitch
          className={classes.toggle}
          onClick={handleTemperatureSwitch}
          checked={isFahrenheit}
          name="checkedB"
          color="primary"
        />
        <span>°F</span>
      </div>
    </div>
  )
}

Toggle.propTypes = {

}

export default Toggle
