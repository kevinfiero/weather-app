import React, { useEffect, useState } from 'react';
import { findCurrentWeather } from '../../weatherApi';
import Search from '../search/Search';
import TemperatureCardList from '../TemperatureCardList/TemperatureCardList';

export default function App() {

  const [zipCode, setZipCode] = useState("");
  const [currentWeatherArray, setCurrentWeatherArray] = useState([])
  const [zipCodeTextError, setZipCodeTextError] = useState(false);
  const [zipCodeSubmitError, setZipCodeSubmitError] = useState(true)
  const [zipCodeTextErrorMessage, setZipCodeTextErrorMessage] = useState("");

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

  }, [zipCode])

  const zipCodeTextChange = ({ target }) => {
    setZipCode(target.value);
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
      <TemperatureCardList 
      currentWeatherArray={currentWeatherArray} 
      handleDeleteCard={handleDeleteCard}
      />
    </>
  )
}

