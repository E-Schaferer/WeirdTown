import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ShowSubStories = () => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'showSubStories/onShowSubStories' });
  };
  const showSubStoriesButton = useSelector((state) => state.renderReducer.showSubStoriesButton);
  return (
    <div>
      {showSubStoriesButton ? (
        <Button
          className="clickable"
          onClick={dispatcher}
        >
          Show Addendum Files
        </Button>
      ) : (<div />)}
    </div>
  );
};

export default ShowSubStories;
