import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import SubStory from '../SubStory/SubStory';
import ShowSubStories from '../SubStory/ShowSubStories';

const PresentStory = () => {
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
        <div className="flex centered">
          <div className="content-background white fade-in width-majority">
            <div className="flex centered column">
              <h5>Department of Weird Stuff</h5>
              <h5>
                Case No°
                {' '}
                {10000 + id}
              </h5>
            </div>
            <div className="flex centered column">
              <h1>CLASSIFIED</h1>
            </div>
            <div className="padding-small">
              <h4>
                likes:
                {' '}
                {likes}
              </h4>
            </div>
            <div className="padding-small">
              <h3>INCIDENT NAME:</h3>
              <p>{storyname}</p>
            </div>
            <div className="padding-small">
              <h3>INCIDENT LOCATION:</h3>
              <p>{storylocation}</p>
            </div>
            <div className="padding-small">
              <h3>WITNESSES DESCRIPTION:</h3>
              <p>
                -
                {thingsseen}
              </p>
              <p>
                -
                {thingsheard}
              </p>
            </div>
            <div className="padding-small">
              <h3>TIMELINE OF EVENTS:</h3>
              <p>{story}</p>
            </div>
            <ShowSubStories />
            <div>
              <h5 className="flex centered column">TOP SECRET</h5>
            </div>
          </div>
        </div>
      ) : null}
      <div id="substory">
        <SubStory />
      </div>
    </div>
  );
};

export default PresentStory;
