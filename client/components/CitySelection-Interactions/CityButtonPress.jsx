import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const CityButtonPress = ({ handleStartingCitySubmit, cityLocationInput }) => {
  const handleButtonClick = () => {
    if (cityLocationInput === '') {
      alert('please enter a location');
    } else {
      Axios.get('/cityAPI', {
        params: {
          loc: cityLocationInput,
        },
      })
        .then((result) => {
          handleStartingCitySubmit([result.data.lat, result.data.lng]);
        });
    }
  };
  return (
    <button type="button" onClick={handleButtonClick}>Submit</button>
  );
};
CityButtonPress.propTypes = {
  handleStartingCitySubmit: PropTypes.func,
  cityLocationInput: PropTypes.string,
};
CityButtonPress.defaultProps = {
  handleStartingCitySubmit: null,
  cityLocationInput: undefined,
};

export default CityButtonPress;
