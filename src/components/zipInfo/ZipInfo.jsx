import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import backIcon from '../../assets/back.svg'
import { Link } from 'react-router-dom';



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
    padding: "0px"
  }
});

const CityInfo = ({ zip, city }) => {
  const classes = useStyles();
  return (
      <Card className={classes.card}>
        <h2>{city}</h2>
        <h3>{zip}</h3>
        <Link to={`/`}>
          <img src={backIcon} className={classes.icons}/>
        </Link>
        
      </Card>
  )
}

CityInfo.propTypes = {

}

export default CityInfo
