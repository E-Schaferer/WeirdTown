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
  storyFormRender: PropTypes.func,
  storyFormSubmit: PropTypes.func,
  storyFormZone: PropTypes.bool,
  storySubmissionPrompt: PropTypes.bool,
};
AbsentStory.defaultProps = {
  storyFormRender: undefined,
  storyFormSubmit: undefined,
  storyFormZone: undefined,
  storySubmissionPrompt: undefined,
};

export default AbsentStory;
