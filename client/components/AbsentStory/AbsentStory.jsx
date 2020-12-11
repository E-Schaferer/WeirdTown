import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = (props) => {
  const {
    storyFormSubmit,
    storyFormRender,
    storyFormZone,
    storySubmissionPrompt,
    inputName,
    inputLocation,
    inputSaw,
    inputHeard,
    inputStory,
    handleTextAreaChange,
    handleUserError,
  } = props;
  return (
    <div id="absent-story-zone">
      {storySubmissionPrompt
        ? (
          <div id="submission-prompt">
            <div id="prompt-question">
              <h2>No stories have been told about this place. Would you like to share one?</h2>
            </div>
            <div id="prompt-button">
              <StoryButtonClick storyFormRender={storyFormRender} />
            </div>
          </div>
        ) : <div />}
      {storyFormZone
        ? (
          <div id="story-form-zone">
            <StoryForm
              storyFormSubmit={storyFormSubmit}
              inputName={inputName}
              inputLocation={inputLocation}
              inputSaw={inputSaw}
              inputHeard={inputHeard}
              inputStory={inputStory}
              handleTextAreaChange={handleTextAreaChange}
              handleUserError={handleUserError}
            />
          </div>
        ) : <div />}
    </div>
  );
};
AbsentStory.propTypes = {
  storyFormRender: PropTypes.func,
  storyFormSubmit: PropTypes.func,
  storyFormZone: PropTypes.bool,
  storySubmissionPrompt: PropTypes.bool,
  inputName: PropTypes.string,
  inputLocation: PropTypes.string,
  inputSaw: PropTypes.string,
  inputHeard: PropTypes.string,
  inputStory: PropTypes.string,
  handleTextAreaChange: PropTypes.func,
  handleUserError: PropTypes.func,
};
AbsentStory.defaultProps = {
  storyFormRender: undefined,
  storyFormSubmit: undefined,
  storyFormZone: undefined,
  storySubmissionPrompt: undefined,
  inputName: '',
  inputLocation: '',
  inputSaw: '',
  inputHeard: '',
  inputStory: '',
  handleTextAreaChange: undefined,
  handleUserError: undefined,
};

export default AbsentStory;
