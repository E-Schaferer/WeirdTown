import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

const StoryButtonClick = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={dispatch({ type: 'StoryButtonClick/storyFormRender' })}
      id="story-button"
    >
      Share your story
    </Button>
  );
};

export default StoryButtonClick;
