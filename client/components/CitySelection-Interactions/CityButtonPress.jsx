import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const CityButtonPress = ({ handleStartingCitySubmit, cityLocationInput }) => {
  const handleButtonClick = () => {
    Axios.get('/cityAPI', {
      params: {
        loc: cityLocationInput,
      },
    })
      .then((data) => {
        handleStartingCitySubmit(data);
      });
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
