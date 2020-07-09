import React from 'react';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onStorySubmit = this.onStorySubmit.bind(this);
  }

  onStorySubmit() {
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
      this.props.storyFormSubmit(storyName, storyLoc, storySaw, storyHeard, story);
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
          <label for="name">What do you call it?</label>
          <input name="name" id="input-name" type="text"></input>
        </div>
        <div>
          <label for="location">Where did it happen?</label>
          <textarea name="location" rows="5" cols="75" id="input-location" type="text"></textarea>
        </div>
        <div id="story-saw">
          <label for="saw">What did you see?</label>
          <textarea name="saw" rows="5" cols="75" id="input-saw" type="text"></textarea>
        </div>
        <div id="story-heard">
          <label for="heard">What did you hear?</label>
          <textarea name="heard" rows="5" cols="75" id="input-heard" type="text"></textarea>
        </div>
        <div id="story-body">
          <label id="story-body" for="body">Tell us your story</label>
          <textarea name="body" rows="5" cols="75" id="input-story" type="text"></textarea>
        </div>
        <div id="submit-zone">
          <button onClick={this.onStorySubmit}>Submit your story!</button>
        </div>
        <div id="secret-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}

export default StoryForm;
