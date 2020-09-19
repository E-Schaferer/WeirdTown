import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const StoryFormSubmit = (props) => {
  const onStorySubmit = () => {
    const { storyFormSubmit } = props;
    const storyName = document.getElementById('input-name').value;
    const storyLoc = document.getElementById('input-location').value;
    const storySaw = document.getElementById('input-saw').value;
    const storyHeard = document.getElementById('input-heard').value;
    const story = document.getElementById('input-story').value;
    if (
      storyName === ''
      || storyLoc === ''
      || storySaw === ''
      || storyHeard === ''
      || story === ''
    ) {
      // needs alert
      console.log('Please fill out all fields');
    } else {
      storyFormSubmit(storyName, storyLoc, storySaw, storyHeard, story);
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
};
StoryFormSubmit.defaultProps = {
  storyFormSubmit: undefined,
};

export default StoryFormSubmit;
