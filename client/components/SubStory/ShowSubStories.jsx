import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ShowSubStories = () => {
  const dispatch = useDispatch();
  const subStoryListButtonFlex = useSelector((state) => state.subStoryListButtonFlex);
  return (
    <div>
      {subStoryListButtonFlex ? (
        <Button
          className="clickable"
          onClick={dispatch({ type: 'showSubStories/onShowSubStories' })}
        >
          Show Addendum Files
        </Button>
      ) : (<div />)}
    </div>
  );
};

export default ShowSubStories;
