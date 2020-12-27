import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = (props) => {
  const {
    handleUserError,
  } = props;
  const storySubmissionPrompt = useSelector((state) => state.storySubmissionPrompt);
  const storyFormZone = useSelector((state) => state.storyFormZone);
  return (
    <div id="absent-story-zone">
      {storySubmissionPrompt
        ? (
          <div id="submission-prompt">
            <div id="prompt-question">
              <h2>No stories have been told about this place. Would you like to share one?</h2>
            </div>
            <div id="prompt-button">
              <StoryButtonClick />
            </div>
          </div>
        ) : <div />}
      {storyFormZone
        ? (
          <div id="story-form-zone">
            <StoryForm
              handleUserError={handleUserError}
            />
          </div>
        ) : <div />}
    </div>
  );
};
AbsentStory.propTypes = {
  handleUserError: PropTypes.func,
};
AbsentStory.defaultProps = {
  handleUserError: undefined,
};

export default AbsentStory;
