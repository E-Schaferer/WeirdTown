import React from 'react';
import PropTypes from 'prop-types';
import StoryFormSubmit from './StoryForm-Interactions/StoryFormSubmit';

const StoryForm = (props) => {
  const { storyFormSubmit } = props;
  return (
    <div id="story-form">
      <div id="input-weird-header">
        <h5>Department of Weird Stuff</h5>
      </div>
      <div id="input-header">
        <h1>WEIRD INCIDENT SUBMISSION FORM</h1>
      </div>
      <div id="story-name-input">
        <label htmlFor="name">
          What do you call it?
          <input name="name" id="input-name" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          Where did it happen?
          <textarea name="location" rows="5" cols="75" id="input-location" type="text" />
        </label>
      </div>
      <div id="story-saw">
        <label htmlFor="saw">
          What did you see?
          <textarea name="saw" rows="5" cols="75" id="input-saw" type="text" />
        </label>
      </div>
      <div id="story-heard">
        <label htmlFor="heard">
          What did you hear?
          <textarea name="heard" rows="5" cols="75" id="input-heard" type="text" />
        </label>
      </div>
      <div id="story-body">
        <label id="story-body" htmlFor="body">
          Tell us your story
          <textarea name="body" rows="5" cols="75" id="input-story" type="text" />
        </label>
      </div>
      <div id="submit-zone">
        <StoryFormSubmit storyFormSubmit={storyFormSubmit} />
      </div>
      <div id="secret-footer">
        <h5 className="top-secret">TOP SECRET</h5>
      </div>
    </div>
  );
};
StoryForm.propTypes = {
  storyFormSubmit: PropTypes.func.isRequired,
};

export default StoryForm;
