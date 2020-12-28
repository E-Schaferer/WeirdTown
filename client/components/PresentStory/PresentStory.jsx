import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import SubStory from '../SubStory/SubStory';

const PresentStory = ({ handleError, handleUserError }) => {
  const {
    id,
    likes,
    storyname,
    storylocation,
    thingsseen,
    thingsheard,
    story,
  } = useSelector(((state) => state.storyReducer.currentStory), shallowEqual);
  const presentStoryRender = useSelector((state) => state.renderReducer.presentStoryRender);

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
                {10000 + id}
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
              <p>{storyname}</p>
            </div>
            <div>
              <h3 className="underlined">INCIDENT LOCATION:</h3>
              <p>{storylocation}</p>
            </div>
            <div>
              <h3 className="underlined">WITNESSES DESCRIPTION:</h3>
              <p>
                -
                {thingsseen}
              </p>
              <p>
                -
                {thingsheard}
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
