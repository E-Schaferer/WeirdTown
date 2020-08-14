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
      // locationSelected: false,
      // storyForm: false,
      // storyPresent: 2,
      lastMarker: undefined,
      currentStory: {
        storyId: 'REDACTED',
        story: 'REDACTED',
        storylocation: 'REDACTED',
        storyname: 'REDACTED',
        thingsseen: 'REDACTED',
        thingsheard: 'REDACTED',
      },
    };
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.storyFormRender = this.storyFormRender.bind(this);
    this.storyFormSubmit = this.storyFormSubmit.bind(this);
    this.handleLegendGet = this.handleLegendGet.bind(this);
    this.subStoryFormSubmit = this.subStoryFormSubmit.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
  }

  /*
=====
  - initialization
=====
  */

  /*
=====
  - map click functions
=====
  */
  handleLocationClick(location) {
    document.getElementById('absent-story').classList.remove('hidden');
    document.getElementById('submission-prompt').classList.remove('hidden');
    document.getElementById('present-story').classList.add('hidden');
    document.getElementById('story-form-zone').classList.add('hidden');
    this.state.lastMarker = location;
    this.setState({
      // locationSelected: true,
      // storyPresent: 0,
    });
  }

  handleLegendGet(location) {
    Axios.get(`/locationInfo?lat=${location[0]}&lng=${location[1]}`)
      .then((result) => {
        document.getElementById('present-story').classList.remove('hidden');
        document.getElementById('absent-story').classList.add('hidden');
        document.getElementById('story-form-zone').classList.add('hidden');
        document.getElementById('substory').classList.add('hidden');
        document.getElementById('substory-prompt').classList.remove('hidden');
        document.getElementById('sub-story-form').classList.add('hidden');
        document.getElementById('substory-list-zone').classList.add('hidden');
        document.getElementById('substory-list-button-flex-zone').classList.remove('hidden');
        document.getElementById('substory-list').classList.remove('hidden');
        this.setState({
          // locationSelected: true,
          // storyForm: false,
          // storyPresent: 1,
          currentStory: result.data[0],
        });
      })
      .catch((err) => {
        alert('Something went wrong! Please try again.');
        console.log(err);
      });
  }

  /*
=====
  - story form functions
=====
  */
  storyFormRender() {
    document.getElementById('story-form-zone').classList.remove('hidden');
    document.getElementById('submission-prompt').classList.add('hidden');
    this.setState({
      // storyForm: true
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
        alert('Story successfully posted!');
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
        alert('Substory successfully posted!');
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
  }

  /*
=====
  - render
=====
  */
  render() {
    const { currentStory } = this.state;
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
        <div className="hidden" id="absent-story">
          <div id="absent-story-inner">
            <AbsentStory
              storyFormRender={this.storyFormRender}
              storyFormSubmit={this.storyFormSubmit}
            />
          </div>
        </div>
        <div className="hidden" id="present-story">
          <div id="present-story-flex">
            <div className="flex-center">
              <PresentStory
                currentStory={currentStory}
                subStoryFormSubmit={this.subStoryFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
