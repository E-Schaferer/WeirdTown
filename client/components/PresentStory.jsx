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
        <div id="story-header">
          <div>
            <h5>Department of Weird Stuff</h5>
            <h5>Case No° 10000{p.currentStory.id}</h5>
          </div>
        </div>
        <div id="story-classified">
          <div>
            <h1>CLASSIFIED</h1>
          </div>
        </div>
        <div id="story-name">
          <h3 className="underlined">INCIDENT NAME:</h3>
          <p>{p.currentStory.storyname}</p>
        </div>
        <div>
          <h3 className="underlined">INCIDENT LOCATION:</h3>
          <p>{p.currentStory.storylocation}</p>
        </div>
        <div>
          <h3 className="underlined">WITNESSES DESCRIPTION:</h3>
          <p> - {p.currentStory.thingsseen}</p>
          <p> - {p.currentStory.thingsheard}</p>
        </div>
        <div>
          <h3 className="underlined">TIMELINE OF EVENTS:</h3>
          <p>{p.currentStory.story}</p>
        </div>
        <div id="secret-footer">
          <h5 id="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}

export default PresentStory;
