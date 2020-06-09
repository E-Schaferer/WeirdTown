import React from 'react';
import Axios from 'axios';
import LocationInfo from './LocationInfo.jsx';
import AbsentStory from './AbsentStory.jsx';
import PresentStory from './PresentStory.jsx';
import Mapzone from './Mapzone.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      storyForm: false,
      storyPresent: 2,
      lastMarker: undefined,
      currentStory: {
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
    console.log(location);
    document.getElementById('absent-story').classList.remove('hidden');
    document.getElementById('submission-prompt').classList.remove('hidden');
    document.getElementById('present-story').classList.add('hidden');
    document.getElementById('story-form-zone').classList.add('hidden');
    this.state.lastMarker = location;
    this.setState({
      locationSelected: true,
      storyPresent: 0,
    });
  }

  handleLegendGet(location) {
    Axios.get(`/locationInfo?lat=${location[0]}&lng=${location[1]}`)
      .then((result) => {
        console.log(result);
        document.getElementById('present-story').classList.remove('hidden');
        document.getElementById('absent-story').classList.add('hidden');
        document.getElementById('story-form-zone').classList.add('hidden');
        this.setState({
          locationSelected: true,
          storyForm: false,
          storyPresent: 1,
          currentStory: result.data[0],
        });
      })
      .catch((err) => {
        alert('Something went wrong! Please try again.')
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
    this.setState({ storyForm: true });
  }

  storyFormSubmit(name, loc, saw, heard, story) {
    Axios.post('/storySubmit', {
      story: story,
      name: name,
      loc: loc,
      saw: saw,
      heard: heard,
      lat: this.state.lastMarker[0],
      lng: this.state.lastMarker[1],
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
  - render
=====
  */
  render() {
    return (
      <div>
        <div id="title-zone">
          <div id="title-zone-inner">
            <h1>My <span className="redacted">Weird</span> Normal Town</h1>
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
              <PresentStory currentStory={this.state.currentStory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
