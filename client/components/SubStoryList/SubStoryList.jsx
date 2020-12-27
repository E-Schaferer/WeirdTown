import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubStoryRender from '../SubStoryRender/SubStoryRender';
import GoBack from './GoBack';
import SubStoryListItem from './SubStoryListItem';
import SubstorySort from './SubstorySort';

// subStoryListZone

const SubStoryList = (props) => {
  const subStoryListZone = useSelector((state) => state.subStoryListZone);
  const subStorySubList = useSelector((state) => state.subStorySubList);
  const currentStory = useSelector((state) => state.currentStory);
  const subStoryRenderZone = useSelector((state) => state.subStoryRenderZone);
  const { handleError, handleUserError } = props;
  return (
    <div>
      {subStorySubList
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
        ) : null}
      {subStoryRenderZone
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
