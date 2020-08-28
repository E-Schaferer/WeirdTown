import React from 'react';
import Axios from 'axios';
import AbsentStory from './AbsentStory';
import PresentStory from './PresentStory';
import CurrentUser from './CurrentUser';
import AuthBar from './AuthBar';
import Mapzone from './Mapzone';

class App extends React.Component {
  static handleError(funcName, err) {
    Axios.get(`/errorLog?funcname=${funcName}&err=${err}`);
  }

  constructor(props) {
    super(props);
    this.state = {
      lastMarker: undefined,
      currentStory: {
        storyId: 'REDACTED',
        story: 'REDACTED',
        storylocation: 'REDACTED',
        storyname: 'REDACTED',
        thingsseen: 'REDACTED',
        thingsheard: 'REDACTED',
      },
      absentStoryRender: false, // AbsentStory
      storySubmissionPrompt: false, // submission-prompt
      storyFormZone: false, // story-form-zone
      presentStoryRender: false, // PresentStory
      subStoryPrompt: false, // substory-prompt
      subStory: false, // substory
      subStoryList: false, // substory-list
      subStoryListButtonFlex: false, // substory-list-button-flex-zone
      subStoryListZone: false, // substory-list-zone
      subStoryButton: false, // sub-story-button
      subStoryForm: false, // sub-story-form
      subStorySubList: false, // substory-sub-list
      subStoryRenderZone: false, // substory-render-zone
    };
    this.onShowSub = this.onShowSub.bind(this);
    this.onShowSubStories = this.onShowSubStories.bind(this);
    this.onShowSubForm = this.onShowSubForm.bind(this);
    this.onSubStoryListItemClick = this.onSubStoryListItemClick.bind(this);
    this.onGoBack = this.onGoBack.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.handleLegendGet = this.handleLegendGet.bind(this);
    this.storyFormRender = this.storyFormRender.bind(this);
    this.storyFormSubmit = this.storyFormSubmit.bind(this);
    this.subStoryFormSubmit = this.subStoryFormSubmit.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
  }

  /*
=====
  - presentStory.jsx
=====
  */
  onShowSub() {
    this.setState({
      subStory: true,
      subStoryList: true,
      subStoryListButtonFlex: true,
      subStoryButton: true,
      subStoryPrompt: false,
    });
  }

  /*
=====
  - ShowSubStories.jsx
=====
  */
  onShowSubStories() {
    this.setState({
      subStoryListZone: true,
      subStorySubList: true,
      subStoryList: false,
      subStoryListButtonFlex: false,
      subStoryRenderZone: false,
    });
  }

  /*
=====
  - ShowSubForm.jsx
=====
  */
  onShowSubForm() {
    this.setState({
      subStoryForm: true,
      subStoryButton: false,
    });
  }

  /*
=====
  - SubStoryList.jsx
=====
  */
  onSubStoryListItemClick() {
    this.setState({
      subStoryRenderZone: true,
      subStorySubList: false,
    });
  }

  /*
=====
  - GoBack.jsx
=====
  */
  onGoBack() {
    this.setState({
      subStorySubList: true,
      subStoryRenderZone: false,
    });
  }

  /*
=====
  - map click functions
=====
  */
  handleLocationClick(location) {
    this.state.lastMarker = location;
    this.setState({
      storySubmissionPrompt: true,
      absentStoryRender: true,
      storyFormZone: false,
      presentStoryRender: false,
      subStoryList: false,
      subStoryListButtonFlex: false,
    });
  }

  handleLegendGet(location) {
    Axios.get(`/locationInfo?lat=${location[0]}&lng=${location[1]}`)
      .then((result) => {
        this.setState({
          currentStory: result.data[0],
          presentStoryRender: true,
          subStoryPrompt: true,
          absentStoryRender: false,
          subStory: false,
          subStoryForm: false,
          subStoryList: false,
          subStoryListZone: false,
          subStoryListButtonFlex: false,
          storyFormZone: false,
        });
      })
      .catch((err) => {
        // needs alert
        this.handleError('handleLegendGet', err);
      });
  }

  /*
=====
  - story form functions
=====
  */
  storyFormRender() {
    this.setState({
      storyFormZone: true,
      storySubmissionPrompt: false,
    });
  }

  storyFormSubmit(name, loc, saw, heard, story) {
    const { lastMarker } = this.state;
    Axios.post('/storySubmit', {
      story,
      name,
      loc,
      saw,
      heard,
      lat: lastMarker[0],
      lng: lastMarker[1],
    })
      .then(() => {
        // needs alert
        window.location.reload(true);
      })
      .catch((err) => {
        this.handleError(['storyFormSubmit', err]);
      });
  }

  /*
=====
  - sub story form functions
=====
  */

  subStoryFormSubmit(name, loc, heard, saw, story) {
    const { currentStory } = this.state;
    Axios.post('/subStorySubmit', {
      id: currentStory.id,
      name,
      location: loc,
      heard,
      saw,
      story,
    })
      .then(() => {
        // needs alert
        window.location.reload(true);
      })
      .catch((err) => {
        this.handleError(['subStoryFormSubmit', err]);
      });
  }

  /*
=====
  - user data
=====
  */

  handleUserData(data) {
    // need to actually do things with user data
    console.log(data);
    this.setState({});
  }

  /*
=====
  - render
=====
  */
  render() {
    const {
      currentStory,
      absentStoryRender,
      storySubmissionPrompt,
      storyFormZone,
      presentStoryRender,
      subStory,
      subStoryPrompt,
      subStoryList,
      subStoryListZone,
      subStoryListButtonFlex,
      subStorySubList,
      subStoryRenderZone,
      subStoryForm,
      subStoryButton,
    } = this.state;
    return (
      <div>
        <div id="auth-zone">
          <CurrentUser handleUserData={this.handleUserData} handleError={this.handleError} />
          <AuthBar />
        </div>
        <div id="title-zone">
          <div id="title-zone-inner">
            <h1>
              My
              { ' ' }
              <span className="redacted">Weird</span>
              { ' ' }
              Normal Town
            </h1>
          </div>
        </div>
        <div id="map-zone">
          <Mapzone
            handleLocationClick={this.handleLocationClick}
            handleLegendGet={this.handleLegendGet}
            handleError={this.handleError}
          />
        </div>
        {absentStoryRender
          ? (
            <div id="absent-story">
              <div id="absent-story-inner">
                <AbsentStory
                  storySubmissionPrompt={storySubmissionPrompt}
                  storyFormZone={storyFormZone}
                  storyFormRender={this.storyFormRender}
                  storyFormSubmit={this.storyFormSubmit}
                />
              </div>
            </div>
          )
          : null}
        {presentStoryRender
          ? (
            <div id="present-story">
              <div id="present-story-flex">
                <div className="flex-center">
                  <PresentStory
                    currentStory={currentStory}
                    subStoryPrompt={subStoryPrompt}
                    subStory={subStory}
                    subStoryList={subStoryList}
                    subStoryListButtonFlex={subStoryListButtonFlex}
                    subStoryListZone={subStoryListZone}
                    subStoryButton={subStoryButton}
                    subStoryForm={subStoryForm}
                    subStorySubList={subStorySubList}
                    subStoryRenderZone={subStoryRenderZone}
                    onShowSub={this.onShowSub}
                    onShowSubStories={this.onShowSubStories}
                    onShowSubForm={this.onShowSubForm}
                    onSubStoryListItemClick={this.onSubStoryListItemClick}
                    onGoBack={this.onGoBack}
                    subStoryFormSubmit={this.subStoryFormSubmit}
                    handleError={this.handleError}
                  />
                </div>
              </div>
            </div>
          ) : null}
      </div>
    );
  }
}

export default App;
