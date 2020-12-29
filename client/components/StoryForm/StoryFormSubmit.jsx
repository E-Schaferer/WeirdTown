import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

const StoryFormSubmit = (props) => {
  const {
    inputName,
    inputLocation,
    inputSaw,
    inputHeard,
    inputStory,
  } = props;
  const coords = useSelector((state) => state.mapReducer.lastMarker);
  const dispatch = (useDispatch);

  const storyFormSubmit = (name, loc, saw, heard, story) => {
    const promise = axios.post('/storySubmit', {
      story,
      name,
      loc,
      saw,
      heard,
      lat: coords[0],
      lng: coords[1],
    });
    const result = promise.then(() => {
      // needs alert
      window.location.reload(true);
    });
    const catcher = promise.catch((err) => {
      dispatch({
        type: 'ErrorModal/showError',
        payload: err,
      });
    });
    return result || catcher;
  };

  const onStorySubmit = () => {
    if (
      inputName === ''
      || inputLocation === ''
      || inputSaw === ''
      || inputHeard === ''
      || inputStory === ''
    ) {
      dispatch({
        type: 'ErrorModal/showError',
        payload: 'Please fill out all fields.',
      });
    } else {
      storyFormSubmit(inputName, inputLocation, inputSaw, inputHeard, inputStory);
    }
  };

  return (
    <Button
      className="clickable"
      onClick={onStorySubmit}
    >
      Submit your story!
    </Button>
  );
};

StoryFormSubmit.propTypes = {
  inputName: PropTypes.string,
  inputLocation: PropTypes.string,
  inputSaw: PropTypes.string,
  inputHeard: PropTypes.string,
  inputStory: PropTypes.string,
};
StoryFormSubmit.defaultProps = {
  inputName: '',
  inputLocation: '',
  inputSaw: '',
  inputHeard: '',
  inputStory: '',
};

export default StoryFormSubmit;
