import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import ZipInfo from '../../components/zipInfo/ZipInfo';
import { findWeatherForecast, findCurrentWeather } from '../../weatherApi';
import HourlyCardList from '../../components/HourlyCardList/HourlyCardList';
import ZipCurrentWeather from '../../components/ZipCurrentWeather/ZipCurrentWeather';
import { makeStyles } from '@material-ui/core';
import ls from 'local-storage';


const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-evenly",
    margin: "auto",
    width: "500px"
    
  },
  column: {
    display: "flex",
    flexDirection: "column"
  }

})


const Zip = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [hourlyWeatherArray, setHourlyWeatherArray] = useState([]);
  const [hourlyLoading, setHourlyLoading] = useState(true);
  const [currentLoading, setCurrentLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const handleTemperatureSwitch = () => {
    if(isFahrenheit){
      setIsFahrenheit(false);
      ls.set('isFahrenheit', 'false');
    } else{
      setIsFahrenheit(true);
      ls.set('isFahrenheit', 'true');
    }
  }

  const getHourlyWeather = () => {
    setHourlyLoading(true)
    findWeatherForecast(id)
    .then(res => {
      setZipCode(res.zipCode)
      setCity(res.city)
      setHourlyWeatherArray(res.hourlyWeatherArray)
      setHourlyLoading(false)
    })
  }

  const getCurrentWeather = () => {
    setCurrentLoading(true)
    findCurrentWeather(id)
    .then(res => {
      setCurrentWeather(res);
      setCurrentLoading(false);
    })
    

  }


  useEffect(() => {
    getHourlyWeather();
    getCurrentWeather();
    console.log(JSON.parse(ls.get('isFahrenheit')))
    if(JSON.parse((ls.get('isFahrenheit'))) === null){
      setIsFahrenheit(true);
    } else {
      setIsFahrenheit(JSON.parse((ls.get('isFahrenheit'))));
    }
    console.log(isFahrenheit);
  
  }, [])

  return (
    <>

    {!(currentLoading && hourlyLoading)? 
        <div className={classes.column}>
        <div className={classes.row}>
          <ZipInfo zip={zipCode} city={city} isFahrenheit={isFahrenheit} handleTemperatureSwitch = {handleTemperatureSwitch} />
          <ZipCurrentWeather currentWeather = {currentWeather} isFahrenheit={isFahrenheit}/>
        </div>
        <HourlyCardList hourlyWeatherArray = {hourlyWeatherArray} loading = {hourlyLoading} isFahrenheit={isFahrenheit} />
      </div> :
      <div></div>
  
  }
    </>

  )
}

Zip.propTypes = {

}

export default Zip
