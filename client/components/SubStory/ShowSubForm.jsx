import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// subStoryButton

const ShowSubForm = () => {
  const dispatch = useDispatch();
  return (
    <Button
      className="clickable"
      onClick={dispatch({ type: 'showSubForm/onShowSubForm' })}
    >
      Write Your Own Sub-Story
    </Button>
  );
};

export default ShowSubForm;
