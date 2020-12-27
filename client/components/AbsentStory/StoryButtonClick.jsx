import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

const StoryButtonClick = () => (
  <Button
    onClick={useDispatch({ type: 'StoryButtonClick/storyFormRender' })}
    id="story-button"
  >
    Share your story
  </Button>
);

export default StoryButtonClick;
