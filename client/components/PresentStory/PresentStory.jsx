import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';
import SubStory from '../SubStory/SubStory';

const PresentStory = (props) => {
  const { handleError, handleUserError } = props;

  // this function will query the database for substories related to the current story
  const showSub = () => {
    const currentStory = useSelector((state) => state.currentStory.id);
    Axios.get(`/subStoryGet?storyId=${currentStory.id}`)
      .then((result) => {
        useDispatch({
          type: 'presentStory/showSub',
          payload: {
            subNum: result.data.length,
            subs: result.data,
          },
        });
      })
      .catch((err) => {
        handleError('showSub', err);
      });
  };

  const subStoryPrompt = useSelector((state) => state.subStoryPrompt);
  const subStory = useSelector((state) => state.subStory);
  const {
    storyId,
    likes,
    storyName,
    storyLocation,
    thingsSeen,
    thingsHeard,
    story,
  } = useSelector(((state) => state.currentStory), shallowEqual);
  return (
    <div>
      <div id="story-zone">
        <div id="story-header">
          <div>
            <h5>Department of Weird Stuff</h5>
            <h5>
              Case No°
              {' '}
              {10000 + storyId}
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
            {' '}
            {likes}
          </h4>
        </div>
        <div id="story-name">
          <h3 className="underlined">INCIDENT NAME:</h3>
          <p>{storyName}</p>
        </div>
        <div>
          <h3 className="underlined">INCIDENT LOCATION:</h3>
          <p>{storyLocation}</p>
        </div>
        <div>
          <h3 className="underlined">WITNESSES DESCRIPTION:</h3>
          <p>
            -
            {thingsSeen}
          </p>
          <p>
            -
            {thingsHeard}
          </p>
        </div>
        <div>
          <h3 className="underlined">TIMELINE OF EVENTS:</h3>
          <p>{story}</p>
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
                <button className="clickable" type="button" onClick={showSub}>Show Files</button>
              </div>
            </div>
          </div>
        )
        : null}
      {subStory
        ? (
          <div id="substory">
            <SubStory
              handleError={handleError}
              handleUserError={handleUserError}
            />
          </div>
        ) : null}
    </div>
  );
};
PresentStory.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
PresentStory.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default PresentStory;
