import React from 'react';
import PropTypes from 'prop-types';
import CityButtonPress from './CityButtonPress';

const CitySelection = (props) => {
  const {
    handleStartingCitySubmit,
    cityLocationInput,
  } = props;
  return (
    <div>
      <label htmlFor="city-location">
        Where do you live?
        <input name="city-location" />
        <CityButtonPress
          handleStartingCitySubmit={handleStartingCitySubmit}
          cityLocationInput={cityLocationInput}
        />
      </label>
    </div>
  );
};
CitySelection.propTypes = {
  handleStartingCitySubmit: PropTypes.func,
  cityLocationInput: PropTypes.string,
};
CitySelection.defaultProps = {
  handleStartingCitySubmit: undefined,
  cityLocationInput: undefined,
};

export default CitySelection;
