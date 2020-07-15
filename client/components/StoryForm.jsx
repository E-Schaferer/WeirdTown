import React from 'react';
import PropTypes from 'prop-types';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onStorySubmit = this.onStorySubmit.bind(this);
  }

  onStorySubmit() {
    const { storyFormSubmit } = this.props;
    const storyName = document.getElementById('input-name').value;
    const storyLoc = document.getElementById('input-location').value;
    const storySaw = document.getElementById('input-saw').value;
    const storyHeard = document.getElementById('input-heard').value;
    const story = document.getElementById('input-story').value;
    if (
      storyName === ''
      || storyLoc === ''
      || storySaw === ''
      || storyHeard === ''
      || story === ''
    ) {
      alert('Please fill out all fields');
    } else {
      storyFormSubmit(storyName, storyLoc, storySaw, storyHeard, story);
    }
  }

  render() {
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
          <button type="submit" onClick={this.onStorySubmit}>Submit your story!</button>
        </div>
        <div id="secret-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}
StoryForm.propTypes = {
  storyFormSubmit: PropTypes.func.isRequired,
};

export default StoryForm;
