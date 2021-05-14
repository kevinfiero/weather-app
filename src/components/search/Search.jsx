import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Search.css';

const Search = ({zipCode, zipCodeTextError, zipCodeSubmitError, zipCodeTextErrorMessage, zipCodeTextChange, handleZipCodeSubmit}) => {

return (

    <div className={styles.search} >
      <TextField
        inputProps={{ maxLength: 5 }}
        onChange={zipCodeTextChange}
        value={zipCode}
        id="outlined-basic"
        label="Zip Code"
        variant="outlined"
        placeholder="ex: 97210"
        helperText={zipCodeTextErrorMessage}
        error={zipCodeTextError} />


      <Button 
        onClick={handleZipCodeSubmit} 
        variant="contained" 
        color="primary"
        disabled={zipCodeSubmitError}
      >
        Submit
          </Button>
    </div>
  )
}

export default Search
