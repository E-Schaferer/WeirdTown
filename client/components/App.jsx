import React from 'react';
import LocationInfo from './LocationInfo.jsx';
import AbsentStory from './AbsentStory.jsx';
import PresentStory from './PresentStory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      storyPresent: 2,
    };
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleLocationClick() {
    document.getElementById('location-info').classList.remove('hidden');
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
      this.setState({
        locationSelected: true,
        storyPresent: 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h1 id="no-story" onClick={this.handleLocationClick}>location: no story</h1>
        <h1 id="story" onClick={this.handleLocationClick}>location: story</h1>
        <div className="hidden" id="location-info">
          <LocationInfo />
        </div>
        <div className="hidden" id="absent-story">
          <AbsentStory />
        </div>
        <div className="hidden" id="present-story">
          <PresentStory />
        </div>
      </div>
    );
  }
}

export default App;
