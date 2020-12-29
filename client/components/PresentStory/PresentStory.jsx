import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import SubStory from '../SubStory/SubStory';

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
            <SubStory />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PresentStory;
