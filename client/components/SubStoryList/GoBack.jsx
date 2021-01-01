import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { goBackAction } from '../../redux/actions/actionCreators';

const GoBack = () => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(goBackAction());
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
