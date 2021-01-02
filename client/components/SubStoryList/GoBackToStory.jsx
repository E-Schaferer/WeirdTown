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
    <Button onClick={goBackDispatcher}>
      return to story
    </Button>
  );
};

export default GoBackToStory;
