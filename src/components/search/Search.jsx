import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  search: {
    width: "315px",
    margin: "auto"
  },
  button: {
    float: "right",
    marginTop: "10px"
  }
})

const Search = ({ zipCode, zipCodeTextError, zipCodeSubmitError, zipCodeTextErrorMessage, zipCodeTextChange, handleZipCodeSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <TextField
        inputProps={{ maxLength: 5 }}
        onChange={zipCodeTextChange}
        value={zipCode}
        id="filled-error"
        label="Zip Code"
        variant="outlined"
        placeholder="ex: 97210"
        helperText={zipCodeTextErrorMessage}
        error={zipCodeTextError} 
        />

      <Button 
        className={classes.button}
        onClick={handleZipCodeSubmit} 
        variant="contained" 
        color="primary" 
        disabled={zipCodeSubmitError}>
        Add
      </Button>
    </div>
    )
}

Search.propTypes = {
  zipCode: PropTypes.string.isRequired, 
  zipCodeTextError: PropTypes.bool.isRequired,  
  zipCodeSubmitError: PropTypes.bool.isRequired,  
  zipCodeTextErrorMessage: PropTypes.string.isRequired,  
  zipCodeTextChange: PropTypes.func.isRequired, 
  handleZipCodeSubmit: PropTypes.func.isRequired
}

export default Search
