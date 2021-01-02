import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StoryFormSubmit from './StoryFormSubmit';

const mapStateToProps = (state) => ({
  storyFormRender: state.renderReducer.storyFormRender,
});

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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      storyFormRender,
    } = this.props;
    const {
      inputName,
      inputLocation,
      inputSaw,
      inputHeard,
      inputStory,
    } = this.state;
    return (
      <div>
        {storyFormRender ? (
          <div className="fade-in content-background white bottom-of-screen">
            <div className="flex centered column">
              <h5>Department of Weird Stuff</h5>
              <h1>WEIRD INCIDENT SUBMISSION FORM</h1>
            </div>
            <div>
              <label htmlFor="name">
                What do you call it?
                <input name="inputName" onChange={this.handleTextAreaChange} type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="inputLocation">
                Where did it happen?
                <textarea name="inputLocation" rows="5" cols="75" onChange={this.handleTextAreaChange} type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="inputSaw">
                What did you see?
                <textarea name="inputSaw" rows="5" cols="75" onChange={this.handleTextAreaChange} type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="inputHeard">
                What did you hear?
                <textarea name="inputHeard" rows="5" cols="75" onChange={this.handleTextAreaChange} type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="inputStory">
                Tell us your story
                <textarea name="inputStory" rows="5" cols="75" onChange={this.handleTextAreaChange} type="text" />
              </label>
            </div>
            <div className="flex centered column padding-small">
              <StoryFormSubmit
                inputName={inputName}
                inputLocation={inputLocation}
                inputSaw={inputSaw}
                inputHeard={inputHeard}
                inputStory={inputStory}
              />
            </div>
            <div className="flex centered column">
              <h5 className="top-secret">TOP SECRET</h5>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

StoryForm.propTypes = {
  storyFormRender: PropTypes.bool,
};
StoryForm.defaultProps = {
  storyFormRender: false,
};

export default connect(mapStateToProps)(StoryForm);
