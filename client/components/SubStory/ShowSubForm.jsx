import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showSubFormAction } from '../../redux/actions/actionCreators';

const ShowSubForm = () => {
  const subStoryFormButton = useSelector((state) => state.renderReducer.subStoryFormButton);
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(showSubFormAction());
  };

  return (
    <div>
      {subStoryFormButton ? (
        <Button
          className="clickable btn-light"
          onClick={dispatcher}
        >
          Write Your Own Sub-Story
        </Button>
      )
        : null}
    </div>
  );
};

export default ShowSubForm;
