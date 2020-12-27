import React from 'react';
import PropTypes from 'prop-types';
import SubStorySubmit from './SubStorySubmit';

// subStoryForm

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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
      <div>
        <div>
          <h5>Department of Weird Stuff</h5>
        </div>
        <div>
          <h1>
            INCIDENT
            {' '}
            {10000 + 1}
            {' '}
            ADDENDUM FORM
          </h1>
        </div>
        <div>
          <label htmlFor="inputSubName">
            Give the incident a name
            <textarea name="inputSubName" rows="5" cols="75" type="text" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div>
          <label htmlFor="inputSubLocation">
            Where did the incident take place?
            <textarea name="inputSubLocation" rows="5" cols="75" type="text" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div>
          <label htmlFor="inputSubSaw">
            What did you see?
            <textarea name="inputSubSaw" rows="5" cols="75" type="text" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div>
          <label htmlFor="inputSubHeard">
            What did you hear?
            <textarea name="inputSubHeard" rows="5" cols="75" type="text" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div>
          <label htmlFor="inputSubStory">
            Describe the events that took place:
            <textarea name="inputSubStory" rows="5" cols="75" type="text" onChange={this.handleTextAreaChange} />
          </label>
        </div>
        <div>
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
        <div>
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
