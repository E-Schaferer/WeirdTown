import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const StoryFormSubmit = (props) => {
  const onStorySubmit = () => {
    const {
      storyFormSubmit,
      inputName,
      inputLocation,
      inputSaw,
      inputHeard,
      inputStory,
    } = props;
    if (
      inputName === ''
      || inputLocation === ''
      || inputSaw === ''
      || inputHeard === ''
      || inputStory === ''
    ) {
      // needs alert
      console.log('Please fill out all fields');
    } else {
      storyFormSubmit(inputName, inputLocation, inputSaw, inputHeard, inputStory);
    }
  };
  return (
    <Button
      className="clickable"
      onClick={onStorySubmit}
      id="story-form-button"
    >
      Submit your story!
    </Button>
  );
};
StoryFormSubmit.propTypes = {
  storyFormSubmit: PropTypes.func,
  inputName: PropTypes.string,
  inputLocation: PropTypes.string,
  inputSaw: PropTypes.string,
  inputHeard: PropTypes.string,
  inputStory: PropTypes.string,
};
StoryFormSubmit.defaultProps = {
  storyFormSubmit: undefined,
  inputName: '',
  inputLocation: '',
  inputSaw: '',
  inputHeard: '',
  inputStory: '',
};

export default StoryFormSubmit;
