import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import ZipInfo from '../../components/zipInfo/ZipInfo';
import { findWeatherForecast } from '../../weatherApi';


const Zip = props => {
  const { id } = useParams();

  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");


  useEffect(() => {
    findWeatherForecast(id)
    .then(res => {
      setZipCode(res.zipCode)
      setCity(res.city)
    })
  }, [])


  return (
    <div>
      <ZipInfo zip={zipCode} city={city} />
    </div>
  )
}

Zip.propTypes = {

}

export default Zip
