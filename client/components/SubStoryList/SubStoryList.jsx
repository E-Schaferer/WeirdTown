import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubStoryRender from '../SubStoryRender/SubStoryRender';
import GoBack from './GoBack';
import SubStoryListItem from './SubStoryListItem';
import SubstorySort from './SubstorySort';

const SubStoryList = (props) => {
  const subStorySubList = useSelector((state) => state.subStorySubList);
  const currentStory = useSelector((state) => state.currentStory);
  const subStoryRenderZone = useSelector((state) => state.subStoryRenderZone);
  const { handleError, handleUserError } = props;
  return (
    <div>
      {subStorySubList
        ? (
          <div id="substory-sub-list">
            <div id="substory-weird-header">
              <h5>Department of Weird Stuff</h5>
            </div>
            <div id="substory-list-main-header">
              <h1>
                Files associated with file No°
                {' '}
                {currentStory.storyid}
                :
              </h1>
            </div>
            <div id="substory-sort">
              <SubstorySort />
            </div>
            <div id="substory-list-item-render">
              <SubStoryListItem />
            </div>
          </div>
        ) : null}
      {subStoryRenderZone
        ? (
          <div id="substory-render-zone">
            <div>
              <GoBack />
            </div>
            <div id="substory-render-actual">
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
