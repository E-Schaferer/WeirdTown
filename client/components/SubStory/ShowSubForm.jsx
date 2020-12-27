import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ShowSubForm = () => (
  <Button
    className="clickable"
    onClick={useDispatch({ type: 'showSubForm/onShowSubForm' })}
  >
    Write Your Own Sub-Story
  </Button>
);

export default ShowSubForm;
