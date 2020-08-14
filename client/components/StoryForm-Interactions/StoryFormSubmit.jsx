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
      alert('Please fill out all fields');
    } else {
      storyFormSubmit(storyName, storyLoc, storySaw, storyHeard, story);
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
  storyFormSubmit: PropTypes.isRequired,
};
export default StoryFormSubmit;
