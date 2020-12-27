import React from 'react';
import PropTypes from 'prop-types';
import SubStorySubmit from './SubStorySubmit';

class SubStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSubName: '',
      inputSubLocation: '',
      inputSubSaw: '',
      inputSubHeard: '',
      inputSubStory: '',
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
      handleError,
      handleUserError,
    } = this.props;
    const {
      inputSubName,
      inputSubLocation,
      inputSubSaw,
      inputSubHeard,
      inputSubStory,
    } = this.state;
    return (
      <div id="sub-story-form-zone">
        <div id="substory-weird-header">
          <h5>Department of Weird Stuff</h5>
        </div>
        <div id="substory-header">
          <h1>
            INCIDENT
            {' '}
            {10000 + 1}
            {' '}
            ADDENDUM FORM
          </h1>
        </div>
        <div id="substory-name">
          <label htmlFor="sub-name">
            Give the incident a name
            <textarea name="sub-name" rows="5" cols="75" type="text" id="inputSubName" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div id="substory-location">
          <label htmlFor="sub-location">
            Where did the incident take place?
            <textarea name="sub-location" rows="5" cols="75" type="text" id="inputSubLocation" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div id="substory-saw">
          <label htmlFor="sub-saw">
            What did you see?
            <textarea name="sub-saw" rows="5" cols="75" type="text" id="inputSubSaw" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div id="substory-heard">
          <label htmlFor="sub-heard">
            What did you hear?
            <textarea name="sub-heard" rows="5" cols="75" type="text" id="inputSubHeard" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div id="substory-story">
          <label htmlFor="sub-story">
            Describe the events that took place:
            <textarea name="sub-story" rows="5" cols="75" type="text" id="inputSubStory" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div id="substory-button">
          <SubStorySubmit
            handleError={handleError}
            inputSubName={inputSubName}
            inputSubLocation={inputSubLocation}
            inputSubSaw={inputSubSaw}
            inputSubHeard={inputSubHeard}
            inputSubStory={inputSubStory}
            handleUserError={handleUserError}
          />
        </div>
        <div id="sub-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}
SubStoryForm.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStoryForm.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStoryForm;
