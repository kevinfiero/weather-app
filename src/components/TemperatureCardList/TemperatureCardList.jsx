import React from 'react'
import PropTypes from 'prop-types'
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import styles from './TemperatureCardList.css'

const TemperatureCardList = ({zipCodeArray}) => {

  const cardElements = zipCodeArray.map((card) => (
    <li key={card}>
      <TemperatureCard 
      zipCodeArray={card}
      weatherImg="https://www.flaticon.com/svg/vstatic/svg/3313/3313896.svg?token=exp=1620800941~hmac=67fce7cbb0b878ddbaac9e66b1789bc7"
      condition="Sunny"
      temperature="75"
      humidity="60"
      windSpeed="2"
      
      />
    </li>
))
  return (
    <>
      <ul className={styles.TemperatureCardList}>{cardElements}</ul>
    </>

  )
}

TemperatureCardList.propTypes = {

}

export default TemperatureCardList
