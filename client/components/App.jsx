import React from 'react';
import LocationInfo from './LocationInfo.jsx';
import AbsentStory from './AbsentStory.jsx';
import PresentStory from './PresentStory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>hello world 2</h1>
        <LocationInfo />
        <div>
          <AbsentStory />
        </div>
        <div>
          <PresentStory />
        </div>
      </div>
    );
  }
}

export default App;
