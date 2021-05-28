import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import ZipInfo from '../../components/zipInfo/ZipInfo';
import { findWeatherForecast } from '../../weatherApi';
import HourlyCardList from '../../components/HourlyCardList/HourlyCardList';


const Zip = props => {
  const { id } = useParams();

  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [hourlyWeatherArray, setHourlyWeatherArray] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    findWeatherForecast(id)
    .then(res => {
      setZipCode(res.zipCode)
      setCity(res.city)
      setHourlyWeatherArray(res.hourlyWeatherArray)
      setLoading(false)
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
