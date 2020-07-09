import React from 'react';

class SubStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubSubmit = this.onSubSubmit.bind(this);
  }

  onSubSubmit() {
    const subName = document.getElementById('input-substory-name').value;
    const subLoc = document.getElementById('input-substory-location').value;
    const subSaw = document.getElementById('input-substory-saw').value;
    const subHeard = document.getElementById('input-substory-heard').value;
    const subStory = document.getElementById('input-substory-story').value;
    if (
      subName === ''
      || subLoc === ''
      || subSaw === ''
      || subHeard === ''
      || subStory === ''
    ) {
      alert('Please fill out all fields');
    } else {
      this.props.subSubmit(subName, subLoc, subHeard, subSaw, subStory);
    }
  }

  render() {
    return (
      <div id="sub-story-form-zone">
        <div id="substory-weird-header">
          <h5>Department of Weird Stuff</h5>
        </div>
        <div id="substory-header">
          <h1>INCIDENT 10000{1} ADDENDUM FORM</h1>
        </div>
        <div id="substory-name">
          <label for="sub-name">Give the incident a name</label>
          <textarea name="sub-name" rows="5" cols="75" type="text" id="input-substory-name"></textarea>
        </div>
        <div id="substory-location">
          <label htmlFor="sub-location">Where did the incident take place?</label>
          <textarea name="sub-location" rows="5" cols="75" type="text" id="input-substory-location"></textarea>
        </div>
        <div id="substory-saw">
          <label htmlFor="sub-saw">What did you see?</label>
          <textarea name="sub-saw" rows="5" cols="75" type="text" id="input-substory-saw"></textarea>
        </div>
        <div id="substory-heard">
          <label htmlFor="sub-heard">What did you hear?</label>
          <textarea name="sub-heard" rows="5" cols="75" type="text" id="input-substory-heard"></textarea>
        </div>
        <div id="substory-story">
          <label htmlFor="sub-story">Describe the events that took place:</label>
          <textarea name="sub-story" rows="5" cols="75" type="text" id="input-substory-story"></textarea>
        </div>
        <div id="substory-button">
          <button id="substory-submit-button" onClick={this.onSubSubmit}>Submit Substory</button>
        </div>
        <div id="sub-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}

export default SubStoryForm;
