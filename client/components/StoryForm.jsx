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
        <div id="story-name">
          <label>What do you call it?</label>
          <input id="input-name" type="text"></input>
        </div>
        <div>
          <label>Where did it happen?</label>
          <input id="input-location" type="text"></input>
        </div>
        <div id="story-saw">
          <label>What did you see?</label>
          <input id="input-saw" type="text"></input>
        </div>
        <div id="story-heard">
          <label>What did you hear?</label>
          <input id="input-heard" type="text"></input>
        </div>
        <div id="story-body">
          <label id="story-body">Tell us your story</label>
          <input id="input-story" type="text"></input>
        </div>
        <div id="submit-zone">
          <button onClick={this.onStorySubmit}>Submit your story!</button>
        </div>
      </div>
    );
  }
}

export default StoryForm;
