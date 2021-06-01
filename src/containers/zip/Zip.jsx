import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import ZipInfo from '../../components/zipInfo/ZipInfo';
import { findWeatherForecast, findCurrentWeather } from '../../weatherApi';
import HourlyCardList from '../../components/HourlyCardList/HourlyCardList';


const Zip = props => {
  const { id } = useParams();

  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [hourlyWeatherArray, setHourlyWeatherArray] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(async() => {
    setLoading(true)
    findWeatherForecast(id)
    .then(res => {
      setZipCode(res.zipCode)
      setCity(res.city)
      setHourlyWeatherArray(res.hourlyWeatherArray)
      setLoading(false)
    })
    .then(
      findCurrentWeather(id)
    )
    .then(res =>{
      console.log('test');
    })
    

  }, [])

  return (
    <div>
      <ZipInfo zip={zipCode} city={city} />
      <HourlyCardList hourlyWeatherArray = {hourlyWeatherArray} loading = {loading} />
    </div>
  )
}

Zip.propTypes = {

}

export default Zip
