import React from 'react';
import PropTypes from 'prop-types';
import StoryFormSubmit from './StoryFormSubmit';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputLocation: '',
      inputSaw: '',
      inputHeard: '',
      inputStory: '',
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const {
      handleUserError,
      handleError,
    } = this.props;
    const {
      inputName,
      inputLocation,
      inputSaw,
      inputHeard,
      inputStory,
    } = this.state;
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
            <input name="name" id="inputName" onChange={this.handleTextAreaChange} type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="location">
            Where did it happen?
            <textarea name="location" rows="5" cols="75" id="inputLocation" onChange={this.handleTextAreaChange} type="text" />
          </label>
        </div>
        <div id="story-saw">
          <label htmlFor="saw">
            What did you see?
            <textarea name="saw" rows="5" cols="75" id="inputSaw" onChange={this.handleTextAreaChange} type="text" />
          </label>
        </div>
        <div id="story-heard">
          <label htmlFor="heard">
            What did you hear?
            <textarea name="heard" rows="5" cols="75" id="inputHeard" onChange={this.handleTextAreaChange} type="text" />
          </label>
        </div>
        <div id="story-body">
          <label id="story-body" htmlFor="body">
            Tell us your story
            <textarea name="body" rows="5" cols="75" id="inputStory" onChange={this.handleTextAreaChange} type="text" />
          </label>
        </div>
        <div id="submit-zone">
          <StoryFormSubmit
            inputName={inputName}
            inputLocation={inputLocation}
            inputSaw={inputSaw}
            inputHeard={inputHeard}
            inputStory={inputStory}
            handleUserError={handleUserError}
            handleError={handleError}
          />
        </div>
        <div id="secret-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}

StoryForm.propTypes = {
  handleUserError: PropTypes.func,
  handleError: PropTypes.func,
};
StoryForm.defaultProps = {
  handleUserError: undefined,
  handleError: undefined,
};

export default StoryForm;
