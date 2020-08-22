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
    this.handleSort = this.handleSort.bind(this);
  }

  // this function will query the database for substories related to the current story
  showSub() {
    const { currentStory, onShowSub } = this.props;
    Axios.get(`/subStoryGet?storyId=${currentStory.id}`)
      .then((result) => {
        this.setState({
          subNum: result.data.length,
          subs: result.data,
        });
        onShowSub();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // this function will handle re-rendering a list of resorted subs
  handleSort(subs) {
    this.setState({
      subs,
    });
  }

  render() {
    const {
      currentStory,
      subStoryPrompt,
      subStory,
      subStoryList,
      subStoryListButtonFlex,
      subStoryListZone,
      subStoryButton,
      subStoryForm,
      subStorySubList,
      subStoryRenderZone,
      subStoryFormSubmit,
      onGoBack,
      onShowSubStories,
      onSubStoryListItemClick,
      onShowSubForm,
    } = this.props;
    const { subNum, subs } = this.state;
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
          <div id="story-likes">
            <h4>
              likes:
              { ' ' }
              {currentStory.likes}
            </h4>
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
        {subStoryPrompt
          ? (
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
          )
          : <div />}
        {subStory
          ? (
            <div id="substory">
              <SubStory
                handleSort={this.handleSort}
                onSubStoryListItemClick={onSubStoryListItemClick}
                onGoBack={onGoBack}
                onShowSubStories={onShowSubStories}
                onShowSubForm={onShowSubForm}
                currentStory={currentStory}
                subNum={subNum}
                subs={subs}
                subStoryFormSubmit={subStoryFormSubmit}
                subStoryList={subStoryList}
                subStoryListButtonFlex={subStoryListButtonFlex}
                subStoryListZone={subStoryListZone}
                subStoryButton={subStoryButton}
                subStoryForm={subStoryForm}
                subStoryRenderZone={subStoryRenderZone}
                subStorySubList={subStorySubList}
              />
            </div>
          ) : <div />}
      </div>
    );
  }
}
PresentStory.propTypes = {
  currentStory: PropTypes.shape({
    id: PropTypes.number,
    story: PropTypes.string,
    storylocation: PropTypes.string,
    storyname: PropTypes.string,
    thingsseen: PropTypes.string,
    thingsheard: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
  subStory: PropTypes.bool.isRequired,
  subStoryPrompt: PropTypes.bool.isRequired,
  subStoryListButtonFlex: PropTypes.bool.isRequired,
  subStoryList: PropTypes.bool.isRequired,
  subStoryListZone: PropTypes.bool.isRequired,
  subStoryButton: PropTypes.bool.isRequired,
  subStoryForm: PropTypes.bool.isRequired,
  subStoryRenderZone: PropTypes.bool.isRequired,
  subStorySubList: PropTypes.bool.isRequired,
  subStoryFormSubmit: PropTypes.func.isRequired,
  onShowSub: PropTypes.func.isRequired,
  onShowSubForm: PropTypes.func.isRequired,
  onShowSubStories: PropTypes.func.isRequired,
  onSubStoryListItemClick: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default PresentStory;
