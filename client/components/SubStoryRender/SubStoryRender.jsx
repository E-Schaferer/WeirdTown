import React from 'react';
import { useSelector } from 'react-redux';

import SubStoryLike from './SubStoryLike';
import SubStoryDislike from './SubStoryDislike';

const SubStoryRender = () => {
  const subStory = useSelector((state) => state.storyReducer.subStory);

  return (
    <div>
      <div>
        <div>
          <h5>Department of Weird Stuff</h5>
          <h5>
            Case No°
            { ' ' }
            {10000 + subStory.storyid}
            =
            {subStory.id}
          </h5>
        </div>
      </div>
      <div>
        <div>
          <h1>CLASSIFIED</h1>
        </div>
      </div>
      <div>
        <h4>
          likes:
          { ' ' }
          {subStory.sublikes}
        </h4>
        <SubStoryLike />
        <SubStoryDislike />
      </div>
      <div>
        <h3 className="underlined">INCIDENT NAME:</h3>
        {subStory.subname}
      </div>
      <div>
        <h3 className="underlined">INCIDENT LOCATION:</h3>
        {subStory.sublocation}
      </div>
      <div>
        <h3 className="underlined">WITNESS DESCRIPTION:</h3>
        {subStory.subseen}
        {subStory.subheard}
      </div>
      <div>
        <h3 className="underlined">TIMELINE OF EVENTS:</h3>
        {subStory.substory}
      </div>
      <div>
        <h5 className="top-secret">TOP SECRET</h5>
      </div>
    </div>
  );
};

export default SubStoryRender;
