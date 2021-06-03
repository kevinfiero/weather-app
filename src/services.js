import ls from 'local-storage';

export const zipCodeErrorHandler = (zipCode, setZipCodeTextError, setZipCodeSubmitError, setZipCodeTextErrorMessage, currentWeatherArray) => {
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
}

export const temperatureSwitchLogic = (isFahrenheit, setIsFahrenheit) => {
  if(isFahrenheit){
    setIsFahrenheit(false);
    ls.set('isFahrenheit', 'false');
  } else{
    setIsFahrenheit(true);
    ls.set('isFahrenheit', 'true');
  }
}

export const initializeFahrenheit = (setIsFahrenheit) => {
  if(JSON.parse((ls.get('isFahrenheit'))) === null){
    setIsFahrenheit(true);
  } else {
    setIsFahrenheit(JSON.parse((ls.get('isFahrenheit'))));
  }
}

export const initializeWeatherArray = (setCurrentWeatherArray) => {
  if(JSON.parse((ls.get('currentWeatherArray'))) === null){
    setCurrentWeatherArray([]);
  } else {
    setCurrentWeatherArray(JSON.parse((ls.get('currentWeatherArray'))));
  }
}

