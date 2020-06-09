import React from 'react';
import StoryForm from './StoryForm.jsx';

class AbsentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.storyButtonClick = this.storyButtonClick.bind(this);
  }

  storyButtonClick() {
    this.props.storyFormRender();
  }

  render() {
    return (
      <div id='absent-story-zone'>
        <div id="submission-prompt">
          <div id="prompt-question">
            <h2>No stories have been told about this place. Would you like to share one?</h2>
          </div>
          <div id="prompt-button">
            <button id="story-button" onClick={this.storyButtonClick}>Share your story</button>
          </div>
        </div>
        <div id="story-form-zone" className="hidden">
          <StoryForm storyFormSubmit={this.props.storyFormSubmit} />
        </div>
      </div>
    );
  }
}

export default AbsentStory;
