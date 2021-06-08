import React, { useEffect, useState } from 'react';
import { findCurrentWeather } from '../../weatherApi';
import Search from '../../components/Search/Search';
import TemperatureCardList from '../../components/TemperatureCardList/TemperatureCardList';
import Toggle from '../../components/Toggle/Toggle';
import ls from 'local-storage';
import { zipCodeErrorHandler, temperatureSwitchLogic, initializeFahrenheit, initializeWeatherArray } from '../../services';

export default function Home() {

  const [zipCode, setZipCode] = useState("");
  const [currentWeatherArray, setCurrentWeatherArray] = useState([]);
  const [zipCodeTextError, setZipCodeTextError] = useState(false);
  const [zipCodeSubmitError, setZipCodeSubmitError] = useState(true);
  const [zipCodeTextErrorMessage, setZipCodeTextErrorMessage] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    zipCodeErrorHandler(zipCode, setZipCodeTextError, setZipCodeSubmitError, setZipCodeTextErrorMessage, currentWeatherArray);

    if(!initialRender){
      ls.set('currentWeatherArray', JSON.stringify(currentWeatherArray))
    }
    setInitialRender(false);
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
        if(res){
          setCurrentWeatherArray([...currentWeatherArray, res])
          setZipCode("");
        } else{
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
    setCurrentWeatherArray(currentWeatherArray.filter((e) => e.zipCode !== zip));
  }

  return (
    <>
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

