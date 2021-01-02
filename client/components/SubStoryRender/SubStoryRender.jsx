import React from 'react';
import { useSelector } from 'react-redux';

import SubStoryLike from './SubStoryLike';
import SubStoryDislike from './SubStoryDislike';
import GoBackToList from '../SubStoryList/GoBackToList';

const SubStoryRender = () => {
  const subStory = useSelector((state) => state.storyReducer.subStory);

  return (
    <div className="content-background white fade-in width-majority">
      <GoBackToList />
      <div>
        <div className="flex centered column">
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
      <div className="flex centered column">
        <h1>CLASSIFIED</h1>
      </div>
      <div className="padding-small">
        <h4>
          likes:
          { ' ' }
          {subStory.sublikes}
        </h4>
        <SubStoryLike />
        <SubStoryDislike />
      </div>
      <div className="padding-small">
        <h3>INCIDENT NAME:</h3>
        {subStory.subname}
      </div>
      <div className="padding-small">
        <h3>INCIDENT LOCATION:</h3>
        {subStory.sublocation}
      </div>
      <div className="padding-small">
        <h3>WITNESS DESCRIPTION:</h3>
        {subStory.subseen}
        {subStory.subheard}
      </div>
      <div className="padding-small">
        <h3>TIMELINE OF EVENTS:</h3>
        {subStory.substory}
      </div>
      <div>
        <h5 className="flex centered">TOP SECRET</h5>
      </div>
    </div>
  );
};

export default SubStoryRender;
