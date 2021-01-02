import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { goBackToListAction } from '../../redux/actions/actionCreators';

const GoBackToList = () => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(goBackToListAction());
  };

  return (
    <Button
      onClick={dispatcher}
      className="btn-light"
    >
      Return to substory list
    </Button>
  );
};

export default GoBackToList;
