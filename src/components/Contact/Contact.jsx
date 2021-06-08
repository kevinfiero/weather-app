import React from 'react'
import github from '/src/assets/github.png';
import linkedIn from '/src/assets/linkedin.png';
import resume from '/src/assets/resume.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  contact: {
    display: "flex",
    flexDirection: "row",
    width: "8em",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center"
  },
  icon: {
    width: "36px",
    height: "36px",
    padding: "0em",
    margin: "0em",
  }
}

)

const Contact = () => {

  const classes = useStyles();

  return (

    <div className={classes.contact}>
      <a href='https://github.com/kevinfiero/weather-app' target='_blank' rel='noreferrer'>
        <img className={classes.icon} src={github} alt='Github Icon' />
      </a>
      <a href='https://www.linkedin.com/in/kevinfiero/' target='_blank' rel='noreferrer'>
        <img className={classes.icon} src={linkedIn} alt='LinkedIn Icon' />
      </a>
      <a href='https://drive.google.com/file/d/1mSVHxaBoMWGOkCQ73B6QaeRu9B4WWlkg/view' target='_blank' rel='noreferrer'>
        <img className={classes.icon} src={resume} alt='Resume Icon' />
      </a>
    </div>
  )
}

export default Contact
