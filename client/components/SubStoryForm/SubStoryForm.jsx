import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SubStorySubmit from './SubStorySubmit';
import GoBackToList from '../SubStoryList/GoBackToList';

const mapStateToProps = (state) => ({
  subStoryFormRender: state.renderReducer.subStoryFormRender,
});

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
      subStoryFormRender,
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
        {subStoryFormRender ? (
          <div className="content-background white fade-in">
            <GoBackToList />
            <div className="flex centered column">
              <h5>Department of Weird Stuff</h5>
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
                inputSubName={inputSubName}
                inputSubLocation={inputSubLocation}
                inputSubSaw={inputSubSaw}
                inputSubHeard={inputSubHeard}
                inputSubStory={inputSubStory}
              />
            </div>
            <div className="flex centered">
              <h5>TOP SECRET</h5>
            </div>
          </div>
        )
          : (null)}
      </div>
    );
  }
}

SubStoryForm.propTypes = {
  subStoryFormRender: PropTypes.bool,
};
SubStoryForm.defaultProps = {
  subStoryFormRender: false,
};

export default connect(mapStateToProps)(SubStoryForm);
