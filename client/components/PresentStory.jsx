import React from 'react';

class PresentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="story-zone">
        <div>
          <h2>Where it happened:</h2>
          <p>REDACTED</p>
        </div>
        <div>
          <h2>What they call it:</h2>
          <p>REDACTED</p>
        </div>
        <div>
          <h2>What they saw:</h2>
          <p>REDACTED</p>
        </div>
        <div>
          <h2>What they heard:</h2>
          <p>REDACTED</p>
        </div>
        <div>
          <h2>Their story:</h2>
          <p>REDACTED</p>
        </div>
      </div>
    );
  }
}

export default PresentStory;
