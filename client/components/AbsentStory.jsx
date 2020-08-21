import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import StoryButtonClick from './AbsentStory-Interactions/StoryButtonClick';

const AbsentStory = (props) => {
  const {
    storyFormSubmit,
    storyFormRender,
    storyFormZone,
    storySubmissionPrompt,
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
            <StoryForm storyFormSubmit={storyFormSubmit} />
          </div>
        ) : <div />}
    </div>
  );
};
AbsentStory.propTypes = {
  storyFormRender: PropTypes.func.isRequired,
  storyFormSubmit: PropTypes.func.isRequired,
  storyFormZone: PropTypes.bool.isRequired,
  storySubmissionPrompt: PropTypes.bool.isRequired,
};

export default AbsentStory;
