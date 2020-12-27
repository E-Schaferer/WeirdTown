import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ShowSubStories = () => (
  <Button
    className="clickable"
    onClick={useDispatch({ type: 'showSubStories/onShowSubStories' })}
  >
    Show Addendum Files
  </Button>
);

export default ShowSubStories;
