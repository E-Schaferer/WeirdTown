import React from 'react';
import PropTypes from 'prop-types';
import StoryFormSubmit from './StoryForm-Interactions/StoryFormSubmit';

const StoryForm = (props) => {
  const {
    storyFormSubmit,
    inputName,
    inputLocation,
    inputSaw,
    inputHeard,
    inputStory,
    handleTextAreaChange,
  } = props;
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
          <input name="name" id="inputName" onChange={handleTextAreaChange} type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          Where did it happen?
          <textarea name="location" rows="5" cols="75" id="inputLocation" onChange={handleTextAreaChange} type="text" />
        </label>
      </div>
      <div id="story-saw">
        <label htmlFor="saw">
          What did you see?
          <textarea name="saw" rows="5" cols="75" id="inputSaw" onChange={handleTextAreaChange} type="text" />
        </label>
      </div>
      <div id="story-heard">
        <label htmlFor="heard">
          What did you hear?
          <textarea name="heard" rows="5" cols="75" id="inputHeard" onChange={handleTextAreaChange} type="text" />
        </label>
      </div>
      <div id="story-body">
        <label id="story-body" htmlFor="body">
          Tell us your story
          <textarea name="body" rows="5" cols="75" id="inputStory" onChange={handleTextAreaChange} type="text" />
        </label>
      </div>
      <div id="submit-zone">
        <StoryFormSubmit
          storyFormSubmit={storyFormSubmit}
          inputName={inputName}
          inputLocation={inputLocation}
          inputSaw={inputSaw}
          inputHeard={inputHeard}
          inputStory={inputStory}
        />
      </div>
      <div id="secret-footer">
        <h5 className="top-secret">TOP SECRET</h5>
      </div>
    </div>
  );
};
StoryForm.propTypes = {
  storyFormSubmit: PropTypes.func,
  handleTextAreaChange: PropTypes.func,
  inputName: PropTypes.string,
  inputLocation: PropTypes.string,
  inputSaw: PropTypes.string,
  inputHeard: PropTypes.string,
  inputStory: PropTypes.string,
};
StoryForm.defaultProps = {
  storyFormSubmit: undefined,
  handleTextAreaChange: undefined,
  inputName: '',
  inputLocation: '',
  inputSaw: '',
  inputHeard: '',
  inputStory: '',
};

export default StoryForm;
