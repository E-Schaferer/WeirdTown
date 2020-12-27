import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// formerly subStoryButton
// subStoryFormButton

const ShowSubForm = () => {
  const subStoryFormButton = useSelector((state) => state.renderReducer.subStoryFormButton);
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'showSubForm/onShowSubForm' });
  };
  return (
    <div>
      {subStoryFormButton ? (
        <Button
          className="clickable"
          onClick={dispatcher}
        >
          Write Your Own Sub-Story
        </Button>
      )
        : (<div />)}
    </div>
  );
};

export default ShowSubForm;
