import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SubStorySubmit = (props) => {
  const subSubmitClick = () => {
    const {
      subStoryFormSubmit,
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
      id="substory-submit-button"
    >
      Submit Substory
    </Button>
  );
};
SubStorySubmit.propTypes = {
  subStoryFormSubmit: PropTypes.func,
  inputSubName: PropTypes.string,
  inputSubLocation: PropTypes.string,
  inputSubSaw: PropTypes.string,
  inputSubHeard: PropTypes.string,
  inputSubStory: PropTypes.string,
  handleUserError: PropTypes.func,
};
SubStorySubmit.defaultProps = {
  subStoryFormSubmit: undefined,
  inputSubName: undefined,
  inputSubLocation: undefined,
  inputSubSaw: undefined,
  inputSubHeard: undefined,
  inputSubStory: undefined,
  handleUserError: undefined,
};

export default SubStorySubmit;
