import React, { useEffect, useState } from 'react';
import { findCurrentWeather } from '../../weatherApi';
import Search from '../../components/search/Search';
import TemperatureCardList from '../../components/TemperatureCardList/TemperatureCardList';
import Toggle from '../../components/toggle/Toggle';
import ls from 'local-storage';

export default function Home() {

  const [zipCode, setZipCode] = useState("");
  const [currentWeatherArray, setCurrentWeatherArray] = useState([]);
  const [zipCodeTextError, setZipCodeTextError] = useState(false);
  const [zipCodeSubmitError, setZipCodeSubmitError] = useState(true);
  const [zipCodeTextErrorMessage, setZipCodeTextErrorMessage] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    if(isNaN(zipCode)){
      setZipCodeTextError(true);
      setZipCodeSubmitError(true);
      setZipCodeTextErrorMessage('Please only use numbers');
    } else if (!isNaN(zipCode) && zipCode.length < 5){
      setZipCodeTextErrorMessage('');
      setZipCodeTextError(false);
      setZipCodeSubmitError(true);
    } else if (!isNaN(zipCode) && zipCode.length === 5 && (currentWeatherArray.filter(e => e.zipCode === zipCode).length > 0)) {
      setZipCodeTextError(true);
      setZipCodeSubmitError(true);
      setZipCodeTextErrorMessage('This zip code is already displayed');
    } else if(!isNaN(zipCode) && zipCode.length === 5){
      setZipCodeTextErrorMessage('');
      setZipCodeTextError(false);
      setZipCodeSubmitError(false);
    }

  }, [zipCode, currentWeatherArray])

  useEffect(() => {
    if(JSON.parse((ls.get('isFahrenheit'))) === null){
      setIsFahrenheit(true);
    } else {
      setIsFahrenheit(JSON.parse((ls.get('isFahrenheit'))));
    }
  }, [])

  const zipCodeTextChange = ({ target }) => {
    setZipCode(target.value);
  }

  const handleTemperatureSwitch = () => {
    if(isFahrenheit){
      setIsFahrenheit(false);
      ls.set('isFahrenheit', 'false');
    } else{
      setIsFahrenheit(true);
      ls.set('isFahrenheit', 'true');
    }
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

