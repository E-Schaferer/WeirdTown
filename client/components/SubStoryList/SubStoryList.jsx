import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubStoryRender from '../SubStoryRender/SubStoryRender';
import GoBack from './GoBack';
import SubStoryListItem from './SubStoryListItem';
import SubstorySort from './SubstorySort';

// subStoryListZone

const SubStoryList = (props) => {
  // const subStoryListZone = useSelector((state) => state.renderReducer.subStoryListZone);
  const subStoryListParent = useSelector((state) => state.renderReducer.subStoryListParent);
  // formerly subStorySubList
  const subStoryRenderParent = useSelector((state) => state.renderReducer.subStoryRenderZone);
  // formerly subStoryRenderZone
  const currentStory = useSelector((state) => state.storyReducer.currentStory);
  const { handleError, handleUserError } = props;
  return (
    <div>
      {subStoryListParent
        ? (
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
        ) : <div />}
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
        ) : <div />}
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
