import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const SubStorySubmit = (props) => {
  const {
    inputSubName,
    inputSubLocation,
    inputSubSaw,
    inputSubHeard,
    inputSubStory,
  } = props;
  const currentStoryId = useSelector((state) => state.storyReducer.currentStory.id);
  const dispatch = useDispatch();

  const subStoryFormSubmit = (name, loc, heard, saw, story) => {
    const promise = Axios.post('/subStorySubmit', {
      id: currentStoryId,
      name,
      location: loc,
      heard,
      saw,
      story,
    });
    const result = promise.then(() => {
      // needs alert
      window.location.reload(true);
    });
    const catcher = promise.catch((err) => {
      dispatch({
        type: 'ErrorModal/showError',
        payload: err,
      });
    });
    return result || catcher;
  };

  const subSubmitClick = () => {
    if (
      inputSubName === ''
      || inputSubLocation === ''
      || inputSubSaw === ''
      || inputSubHeard === ''
      || inputSubStory === ''
    ) {
      dispatch({
        type: 'ErrorModal/showError',
        payload: 'please fill out all fields',
      });
    } else {
      subStoryFormSubmit(inputSubName, inputSubLocation, inputSubHeard, inputSubSaw, inputSubStory);
    }
  };

  return (
    <Button
      onClick={subSubmitClick}
      className="clickable"
    >
      Submit Substory
    </Button>
  );
};

SubStorySubmit.propTypes = {
  inputSubName: PropTypes.string,
  inputSubLocation: PropTypes.string,
  inputSubSaw: PropTypes.string,
  inputSubHeard: PropTypes.string,
  inputSubStory: PropTypes.string,
};
SubStorySubmit.defaultProps = {
  inputSubName: undefined,
  inputSubLocation: undefined,
  inputSubSaw: undefined,
  inputSubHeard: undefined,
  inputSubStory: undefined,
};

export default SubStorySubmit;
