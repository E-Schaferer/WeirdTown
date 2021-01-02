import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

import { startingCitySubmitAction, showErrorAction } from '../../redux/actions/actionCreators';

const CityButtonPress = ({ cityLocationInput }) => {
  const dispatch = useDispatch();
  const dispatcher = (result) => {
    dispatch(startingCitySubmitAction(result));
  };
  const errDispatcher = () => {
    const errMessage = 'please enter a location';
    dispatch(showErrorAction(errMessage));
  };

  const handleButtonClick = () => {
    if (cityLocationInput === '') {
      errDispatcher();
    } else {
      Axios.get('/cityAPI', {
        params: {
          loc: cityLocationInput,
        },
      })
        .then((result) => {
          dispatcher(result);
        });
    }
  };

  return (
    <button className="margin-5 btn-light" type="button" onClick={handleButtonClick}>Submit</button>
  );
};

CityButtonPress.propTypes = {
  cityLocationInput: PropTypes.string,
};
CityButtonPress.defaultProps = {
  cityLocationInput: undefined,
};

export default CityButtonPress;
