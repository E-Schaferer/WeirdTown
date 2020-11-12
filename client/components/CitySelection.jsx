import React from 'react';
import PropTypes from 'prop-types';
import CityButtonPress from './CitySelection-Interactions/CityButtonPress';

const CitySelection = (props) => {
  const {
    handleTextAreaChange,
    handleStartingCitySubmit,
    cityLocationInput,
  } = props;
  return (
    <div>
      <label htmlFor="city-location">
        Where do you live?
        <input name="city-location" id="cityLocationInput" onChange={handleTextAreaChange} />
        <CityButtonPress
          handleStartingCitySubmit={handleStartingCitySubmit}
          cityLocationInput={cityLocationInput}
        />
      </label>
    </div>
  );
};
CitySelection.propTypes = {
  handleTextAreaChange: PropTypes.func,
  handleStartingCitySubmit: PropTypes.func,
  cityLocationInput: PropTypes.string,
};
CitySelection.defaultProps = {
  handleTextAreaChange: undefined,
  handleStartingCitySubmit: undefined,
  cityLocationInput: undefined,
};

export default CitySelection;
