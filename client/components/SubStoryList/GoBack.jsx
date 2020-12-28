import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const GoBack = () => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'goBack/onGoBack' });
  };

  return (
    <Button
      onClick={dispatcher}
      className="underlined clickable white-text"
    >
      Return to the substory list
    </Button>
  );
};

export default GoBack;
