import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { goBackToStoryAction } from '../../redux/actions/actionCreators';

const GoBackToStory = () => {
  const dispatch = useDispatch();
  const goBackDispatcher = () => {
    dispatch(goBackToStoryAction());
  };
  return (
    <Button className="btn-light" onClick={goBackDispatcher}>
      Return to story
    </Button>
  );
};

export default GoBackToStory;
