import React, { useEffect, useState } from 'react';
import { findCurrentWeather } from '../../weatherApi';
import Search from '../../components/Search/Search';
import TemperatureCardList from '../../components/TemperatureCardList/TemperatureCardList';
import Toggle from '../../components/Toggle/Toggle';
import { zipCodeErrorHandler, temperatureSwitchLogic, initializeFahrenheit, initializeWeatherArray, setZipCodeArray, deleteZipCodeArray } from '../../services';
import Contact from '../../components/Contact/Contact';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  contact: {
    float: "right"
  }
})

export default function Home() {

  const classes = useStyles();
  const [zipCode, setZipCode] = useState("");
  const [currentWeatherArray, setCurrentWeatherArray] = useState([]);
  const [zipCodeTextError, setZipCodeTextError] = useState(false);
  const [zipCodeSubmitError, setZipCodeSubmitError] = useState(true);
  const [zipCodeTextErrorMessage, setZipCodeTextErrorMessage] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    zipCodeErrorHandler(zipCode, setZipCodeTextError, setZipCodeSubmitError, setZipCodeTextErrorMessage, currentWeatherArray);

  }, [zipCode, currentWeatherArray])

  useEffect(() => {
    initializeFahrenheit(setIsFahrenheit);
    initializeWeatherArray(setCurrentWeatherArray);
  }, [])

  const zipCodeTextChange = ({ target }) => {
    setZipCode(target.value);
  }

  const handleTemperatureSwitch = () => {
    temperatureSwitchLogic(isFahrenheit, setIsFahrenheit)
  }

  const handleZipCodeSubmit = () => {

    findCurrentWeather(zipCode)
      .then(res => {
        if (res) {
          setZipCodeArray(zipCode);
          setCurrentWeatherArray([...currentWeatherArray, res])
          setZipCode("");
        } else {
          setZipCodeTextError(true)
          setZipCodeTextErrorMessage("Not a valid zip code")
        }
      })
  }

  const handleKeypress = e => {
    if (e.which === 13) {
      handleZipCodeSubmit();
    }
  };

  const handleDeleteCard = (zip) => {
    deleteZipCodeArray(zip)
    setCurrentWeatherArray(currentWeatherArray.filter((e) => e.zipCode !== zip));
  }

  return (
    <>
      <div className={classes.contact}>
        <Contact />

      </div>
      <Search
        zipCode={zipCode}
        zipCodeTextError={zipCodeTextError}
        zipCodeSubmitError={zipCodeSubmitError}
        zipCodeTextErrorMessage={zipCodeTextErrorMessage}
        zipCodeTextChange={zipCodeTextChange}
        handleZipCodeSubmit={handleZipCodeSubmit}
        handleKeypress={handleKeypress}
      />
      <Toggle
        isFahrenheit={isFahrenheit}
        handleTemperatureSwitch={handleTemperatureSwitch}
      />
      <TemperatureCardList
        currentWeatherArray={currentWeatherArray}
        handleDeleteCard={handleDeleteCard}
        isFahrenheit={isFahrenheit}
      />
    </>
  )
}

