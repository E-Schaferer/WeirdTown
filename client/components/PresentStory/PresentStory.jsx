import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';
import SubStory from '../SubStory/SubStory';

const PresentStory = (props) => {
  const { handleError, handleUserError } = props;
  const dispatch = useDispatch();
  const {
    storyId,
    likes,
    storyName,
    storyLocation,
    thingsSeen,
    thingsHeard,
    story,
  } = useSelector(((state) => state.storyReducer.currentStory), shallowEqual);
  const presentStoryRender = useSelector((state) => state.renderReducer.presentStoryRender);

  // this function will query the database for substories related to the current story
  const showSub = () => {
    Axios.get(`/subStoryGet?storyId=${storyId}`)
      .then((result) => {
        dispatch({
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

  return (
    <div>
      {presentStoryRender ? (
        <div>
          <div>
            <div>
              <h5>Department of Weird Stuff</h5>
              <h5>
                Case No°
                {' '}
                {10000 + storyId}
              </h5>
            </div>
            <div>
              <h1>CLASSIFIED</h1>
            </div>
            <div>
              <h4>
                likes:
                {' '}
                {likes}
              </h4>
            </div>
            <div>
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
            <div>
              <h5 className="top-secret">TOP SECRET</h5>
            </div>
          </div>
          <div id="substory">
            <SubStory
              handleError={handleError}
              handleUserError={handleUserError}
            />
          </div>
        </div>
      ) : (
        <div />
      )}
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

/*
          <div>
            <p>Show related case files</p>
            <button className="clickable" type="button" onClick={showSub}>Show Files</button>
          </div>
*/
