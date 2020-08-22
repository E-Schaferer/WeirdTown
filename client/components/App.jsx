import React from 'react';
import Axios from 'axios';
// import LocationInfo from './LocationInfo';
import AbsentStory from './AbsentStory';
import PresentStory from './PresentStory';
import CurrentUser from './CurrentUser';
import AuthBar from './AuthBar';
import Mapzone from './Mapzone';

class App extends React.Component {
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
        absentStoryRender: false, // AbsentStory
        storySubmissionPrompt: false, // submission-prompt
        storyFormZone: false, // story-form-zone
        presentStoryRender: false, // PresentStory
        subStory: false, // substory
        subStoryPrompt: false, // substory-prompt
        subStoryListZone: false, // substory-list-zone
        subStoryList: false, // substory-list
        subStoryListButtonFlex: false, // substory-list-button-flex-zone
        subStorySubList: false, // substory-sub-list
        subStoryRenderZone: false, // substory-render-zone
        subStoryForm: false, // sub-story-form
        subStoryButton: false, // sub-story-button
      },
    };
    this.storyFormRender = this.storyFormRender.bind(this);
    this.storyFormSubmit = this.storyFormSubmit.bind(this);
    this.handleLegendGet = this.handleLegendGet.bind(this);
    this.subStoryFormSubmit = this.subStoryFormSubmit.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.onShowSub = this.onShowSub.bind(this);
    this.onShowSubForm = this.onShowSubForm.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.onShowSubStories = this.onShowSubStories.bind(this);
    this.onSubStoryListItemClick = this.onSubStoryListItemClick.bind(this);
    this.onGoBack = this.onGoBack.bind(this);
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
        console.log('Something went wrong! Please try again.');
        console.log(err);
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
        console.log('Story successfully posted!');
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
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
        console.log('Substory successfully posted!');
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*
=====
  - user data
=====
  */

  handleUserData(data) {
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
          <CurrentUser handleUserData={this.handleUserData} />
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
          />
        </div>
        {absentStoryRender
          ? (
            <div id="absent-story">
              <div id="absent-story-inner">
                <AbsentStory
                  storyFormRender={this.storyFormRender}
                  storyFormSubmit={this.storyFormSubmit}
                  storySubmissionPrompt={storySubmissionPrompt}
                  storyFormZone={storyFormZone}
                />
              </div>
            </div>
          )
          : <div />}
        {presentStoryRender
          ? (
            <div id="present-story">
              <div id="present-story-flex">
                <div className="flex-center">
                  <PresentStory
                    subStoryFormSubmit={this.subStoryFormSubmit}
                    onShowSub={this.onShowSub}
                    onShowSubForm={this.onShowSubForm}
                    onShowSubStories={this.onShowSubStories}
                    onSubStoryListItemClick={this.onSubStoryListItemClick}
                    onGoBack={this.onGoBack}
                    currentStory={currentStory}
                    subStoryPrompt={subStoryPrompt}
                    subStory={subStory}
                    subStoryList={subStoryList}
                    subStoryListZone={subStoryListZone}
                    subStoryListButtonFlex={subStoryListButtonFlex}
                    subStorySubList={subStorySubList}
                    subStoryRenderZone={subStoryRenderZone}
                    subStoryButton={subStoryButton}
                    subStoryForm={subStoryForm}
                  />
                </div>
              </div>
            </div>
          ) : <div />}
      </div>
    );
  }
}

export default App;
