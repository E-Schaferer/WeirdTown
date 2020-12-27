import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const GoBack = () => (
  <Button
    onClick={useDispatch({ type: 'goBack/onGoBack' })}
    className="underlined clickable white-text"
    id="substory-render-goback"
  >
    Return to the substory list
  </Button>
);

export default GoBack;
