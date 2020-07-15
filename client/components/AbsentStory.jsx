import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';

class AbsentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.storyButtonClick = this.storyButtonClick.bind(this);
  }

  storyButtonClick() {
    const { storyFormRender } = this.props;
    storyFormRender();
  }

  render() {
    const { storyFormSubmit } = this.props;
    return (
      <div id="absent-story-zone">
        <div id="submission-prompt">
          <div id="prompt-question">
            <h2>No stories have been told about this place. Would you like to share one?</h2>
          </div>
          <div id="prompt-button">
            <button type="button" id="story-button" onClick={this.storyButtonClick}>Share your story</button>
          </div>
        </div>
        <div id="story-form-zone" className="hidden">
          <StoryForm storyFormSubmit={storyFormSubmit} />
        </div>
      </div>
    );
  }
}
AbsentStory.propTypes = {
  storyFormRender: PropTypes.func.isRequired,
  storyFormSubmit: PropTypes.func.isRequired,
};

export default AbsentStory;
