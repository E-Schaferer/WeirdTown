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
      coords: [[47.571806504300895, -122.22178459167482],
        [47.57519395538315, -122.22873687744142]],
      lastMarker: undefined,
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
  componentDidMount() {
    Axios.get('/allStories')
      .then((result) => {
        console.log(result);
        this.setState({
          coords: [],
        });
      })
      .catch((err) => {
        alert('Could not load map data, please reload the page');
        console.log(err);
      });
  }

  /*
=====
  - map click functions
=====
  */
  handleLocationClick(location) {
    document.getElementById('absent-story').classList.remove('hidden');
    document.getElementById('present-story').classList.add('hidden');
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
    this.setState({ storyForm: true });
  }

  storyFormSubmit() {
    Axios.post('/storySubmit', {
      data: 'blank',
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /*
=====
  - render
=====
  */
  render() {
    return (
      <div>
        <div id="map-zone">
          <Mapzone 
          coords={this.state.coords}
          handleLocationClick={this.handleLocationClick}
          handleLegendGet={this.handleLegendGet}
          />
        </div>
        <div className="hidden" id="absent-story">
          <AbsentStory 
          storyFormRender={this.storyFormRender}
          storyFormSubmit={this.storyFormSubmit}
          />
        </div>
        <div className="hidden" id="present-story">
          <PresentStory />
        </div>
      </div>
    );
  }
}

export default App;
