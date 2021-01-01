import React from 'react';
import { useSelector } from 'react-redux';

import SubStoryRender from '../SubStoryRender/SubStoryRender';
import GoBack from './GoBack';
import SubStoryListItem from './SubStoryListItem';
import SubstorySort from './SubstorySort';

const SubStoryList = () => {
  const subStoryListParent = useSelector((state) => state.renderReducer.subStoryListParent);
  const subStoryRenderParent = useSelector((state) => state.renderReducer.subStoryRenderParent);
  const currentStory = useSelector((state) => state.storyReducer.currentStory);
  const subNum = useSelector((state) => state.storyReducer.subNum);

  return (
    <div>
      {subStoryListParent
        ? (
          <div className="content-background white">
            {subNum > 0 ? (
              <div>
                <div className="flex centered column">
                  <h5>Department of Weird Stuff</h5>
                  <h1>
                    Files associated with file No°
                    {' '}
                    {currentStory.id}
                    :
                  </h1>
                </div>
                <div>
                  <SubstorySort />
                </div>
                <div>
                  <SubStoryListItem />
                </div>
              </div>
            ) : <p>Sorry, there are no files associated with this one!</p>}
          </div>
        ) : null}
      {subStoryRenderParent
        ? (
          <div>
            <div>
              <GoBack />
            </div>
            <div>
              <SubStoryRender />
            </div>
          </div>
        ) : null}
    </div>
  );
};

export default SubStoryList;
