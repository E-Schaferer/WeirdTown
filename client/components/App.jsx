import React from 'react';
import Axios from 'axios';
import LocationInfo from './LocationInfo.jsx';
import AbsentStory from './AbsentStory.jsx';
import PresentStory from './PresentStory.jsx';
import Mapzone from './Map.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      storyForm: false,
      storyPresent: 2,
    };
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.storyFormRender = this.storyFormRender.bind(this);
    this.storyFormSubmit = this.storyFormSubmit.bind(this);
  }

  handleLocationClick() {
    Axios.get('/locationInfo')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    if (event.target.id === 'no-story') {
      document.getElementById('absent-story').classList.remove('hidden');
      document.getElementById('present-story').classList.add('hidden');
      this.setState({
        locationSelected: true,
        storyPresent: 0,
      });
    } else if (event.target.id === 'story') {
      document.getElementById('present-story').classList.remove('hidden');
      document.getElementById('absent-story').classList.add('hidden');
      document.getElementById('story-form-zone').classList.add('hidden');
      this.setState({
        locationSelected: true,
        storyForm: false,
        storyPresent: 1,
      });
    }
  }

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

  render() {
    return (
      <div>
        <div id="map-zone">
          <Mapzone />
        </div>
        <h1 id="no-story" onClick={this.handleLocationClick}>location: no story</h1>
        <h1 id="story" onClick={this.handleLocationClick}>location: story</h1>
        <div className="hidden" id="absent-story">
          <AbsentStory storyFormRender={this.storyFormRender} storyFormSubmit={this.storyFormSubmit} />
        </div>
        <div className="hidden" id="present-story">
          <PresentStory />
        </div>
      </div>
    );
  }
}

export default App;
