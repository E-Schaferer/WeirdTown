import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import SubStoryRender from '../SubStoryRender/SubStoryRender';
import GoBack from './GoBack';
import SubStoryListItem from './SubStoryListItem';
import SubstorySort from './SubstorySort';

const SubStoryList = ({ handleError, handleUserError }) => {
  const subStoryListParent = useSelector((state) => state.renderReducer.subStoryListParent);
  const subStoryRenderParent = useSelector((state) => state.renderReducer.subStoryRenderParent);
  const currentStory = useSelector((state) => state.storyReducer.currentStory);
  const subNum = useSelector((state) => state.storyReducer.subNum);

  return (
    <div>
      {subStoryListParent
        ? (
          <div>
            {subNum > 0 ? (
              <div>
                <div>
                  <h5>Department of Weird Stuff</h5>
                </div>
                <div>
                  <h1>
                    Files associated with file No°
                    {' '}
                    {currentStory.storyid}
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
              <SubStoryRender
                handleError={handleError}
                handleUserError={handleUserError}
              />
            </div>
          </div>
        ) : null}
    </div>
  );
};

SubStoryList.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStoryList.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStoryList;
