import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { storyFormRenderAction } from '../../redux/actions/actionCreators';

const StoryButtonClick = () => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(storyFormRenderAction());
  };
  const storyFormButton = useSelector((state) => state.renderReducer.storyFormButton);

  return (
    <div>
      {storyFormButton ? (
        <div className="flex column centered white content-background fade-in">
          <h2>No stories have been told about this place. Would you like to share one?</h2>
          <Button onClick={dispatcher}>Share your story</Button>
        </div>
      ) : null}
    </div>
  );
};

export default StoryButtonClick;
