import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import SubStory from './SubStory';

class PresentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subNum: 0,
      subs: [],
    };
    this.showSub = this.showSub.bind(this);
  }

  // this function will query the database for substories related to the current story
  showSub() {
    const { currentStory } = this.props;
    Axios.get(`/subStoryGet?storyId=${currentStory.id}`)
      .then((result) => {
        this.setState({
          subNum: result.data.length,
          subs: result.data,
        });
        document.getElementById('substory').classList.toggle('hidden');
        document.getElementById('substory-prompt').classList.toggle('hidden');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { currentStory } = this.props;
    const { subNum, subs, subSubmit } = this.state;
    return (
      <div>
        <div id="story-zone">
          <div id="story-header">
            <div>
              <h5>Department of Weird Stuff</h5>
              <h5>
                Case No°
                { ' ' }
                {10000 + currentStory.id}
              </h5>
            </div>
          </div>
          <div id="story-classified">
            <div>
              <h1>CLASSIFIED</h1>
            </div>
          </div>
          <div id="story-name">
            <h3 className="underlined">INCIDENT NAME:</h3>
            <p>{currentStory.storyname}</p>
          </div>
          <div>
            <h3 className="underlined">INCIDENT LOCATION:</h3>
            <p>{currentStory.storylocation}</p>
          </div>
          <div>
            <h3 className="underlined">WITNESSES DESCRIPTION:</h3>
            <p>
              -
              {currentStory.thingsseen}
            </p>
            <p>
              -
              {currentStory.thingsheard}
            </p>
          </div>
          <div>
            <h3 className="underlined">TIMELINE OF EVENTS:</h3>
            <p>{currentStory.story}</p>
          </div>
          <div id="secret-footer">
            <h5 className="top-secret">TOP SECRET</h5>
          </div>
        </div>
        <div id="substory-prompt">
          <div id="substory-prompt-content">
            <div className="substory-prompt-text white-text">
              <p>Show related case files</p>
            </div>
            <div className="substory-prompt-button">
              <button className="clickable" type="button" onClick={this.showSub}>Show Files</button>
            </div>
          </div>
        </div>
        <div id="substory" className="hidden">
          <SubStory subNum={subNum} subs={subs} subSubmit={subSubmit} />
        </div>
      </div>
    );
  }
}
PresentStory.propTypes = {
  currentStory: PropTypes.isRequired,
};

export default PresentStory;
