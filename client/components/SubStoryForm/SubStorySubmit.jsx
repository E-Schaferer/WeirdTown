import React from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SubStorySubmit = (props) => {
  const currentStory = useSelector((state) => state.currentStory);
  const subStoryFormSubmit = (name, loc, heard, saw, story) => {
    const promise = Axios.post('/subStorySubmit', {
      id: currentStory.id,
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
      props.handleError(['subStoryFormSubmit', err]);
    });
    return result || catcher;
  };
  const subSubmitClick = () => {
    const {
      inputSubName,
      inputSubLocation,
      inputSubSaw,
      inputSubHeard,
      inputSubStory,
      handleUserError,
    } = props;
    if (
      inputSubName === ''
      || inputSubLocation === ''
      || inputSubSaw === ''
      || inputSubHeard === ''
      || inputSubStory === ''
    ) {
      const message = 'please fill out all fields';
      handleUserError(message);
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
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStorySubmit.defaultProps = {
  inputSubName: undefined,
  inputSubLocation: undefined,
  inputSubSaw: undefined,
  inputSubHeard: undefined,
  inputSubStory: undefined,
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStorySubmit;
