import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StoryButtonClick = (props) => {
  const { storyFormRender } = props;
  return (
    <Button
      onClick={storyFormRender}
      id="story-button"
    >
      Share your story
    </Button>
  );
};
StoryButtonClick.propTypes = {
  storyFormRender: PropTypes.isRequired,
};

export default StoryButtonClick;
