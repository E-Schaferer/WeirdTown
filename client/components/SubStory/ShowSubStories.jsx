import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ShowSubStories = () => {
  const dispatch = useDispatch();
  return (
    <Button
      className="clickable"
      onClick={dispatch({ type: 'showSubStories/onShowSubStories' })}
    >
      Show Addendum Files
    </Button>
  );
};

export default ShowSubStories;
