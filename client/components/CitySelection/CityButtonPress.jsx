import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

// import { handleStartingCitySubmitAction } from '../../redux/actions/actionCreators';

const CityButtonPress = ({ cityLocationInput }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (cityLocationInput === '') {
      dispatch({
        type: 'ErrorModal/showError',
        payload: 'please enter a location',
      });
    } else {
      Axios.get('/cityAPI', {
        params: {
          loc: cityLocationInput,
        },
      })
        .then((result) => {
          dispatch({
            type: 'cityButtonPress/handleStartingCitySubmit',
            payload: {
              lat: result.data.lat,
              long: result.data.lng,
            },
          });
        });
    }
  };

  return (
    <button type="button" onClick={handleButtonClick}>Submit</button>
  );
};

CityButtonPress.propTypes = {
  cityLocationInput: PropTypes.string,
};
CityButtonPress.defaultProps = {
  cityLocationInput: undefined,
};

export default CityButtonPress;
