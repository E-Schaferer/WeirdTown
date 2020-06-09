import React from 'react';

class PresentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const p = this.props;
    return (
      <div id="story-zone">
        <div>
          <h2>Where it happened:</h2>
          <p>{p.currentStory.storylocation}</p>
        </div>
        <div>
          <h2>What they call it:</h2>
          <p>{p.currentStory.storyname}</p>
        </div>
        <div>
          <h2>What they saw:</h2>
          <p>{p.currentStory.thingsseen}</p>
        </div>
        <div>
          <h2>What they heard:</h2>
          <p>{p.currentStory.thingsheard}</p>
        </div>
        <div>
          <h2>Their story:</h2>
          <p>{p.currentStory.story}</p>
        </div>
      </div>
    );
  }
}

export default PresentStory;
