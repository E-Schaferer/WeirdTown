import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const StoryButtonClick = () => {
  const dispatch = useDispatch();
  const storyFormButton = useSelector((state) => state.renderReducer.storyFormButton);
  return (
    <div>
      {
        storyFormButton ? (
          <div>
            <h2>No stories have been told about this place. Would you like to share one?</h2>
            <Button
              onClick={dispatch({ type: 'StoryButtonClick/storyFormRender' })}
              id="story-button"
            >
              Share your story
            </Button>
          </div>
        ) : (<div />)
      }
    </div>
  );
};

export default StoryButtonClick;
