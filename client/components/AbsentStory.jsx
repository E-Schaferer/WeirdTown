import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import StoryButtonClick from './AbsentStory-Interactions/StoryButtonClick';

const AbsentStory = (props) => {
  const { storyFormSubmit, storyFormRender } = props;
  return (
    <div id="absent-story-zone">
      <div id="submission-prompt">
        <div id="prompt-question">
          <h2>No stories have been told about this place. Would you like to share one?</h2>
        </div>
        <div id="prompt-button">
          <StoryButtonClick storyFormRender={storyFormRender} />
        </div>
      </div>
      <div id="story-form-zone" className="hidden">
        <StoryForm storyFormSubmit={storyFormSubmit} />
      </div>
    </div>
  );
};
AbsentStory.propTypes = {
  storyFormRender: PropTypes.func.isRequired,
  storyFormSubmit: PropTypes.func.isRequired,
};

export default AbsentStory;
