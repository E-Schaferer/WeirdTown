import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubStoryForm from '../SubStoryForm/SubStoryForm';
import SubStoryList from '../SubStoryList/SubStoryList';
import ShowSubForm from './ShowSubForm';
import ShowSubStories from './ShowSubStories';

const SubStory = (props) => {
  const subStoryList = useSelector((state) => state.subStoryList);
  const subNum = useSelector((state) => state.subNum);
  const subStoryListButtonFlex = useSelector((state) => state.subStoryListButtonFlex);
  const subStoryListZone = useSelector((state) => state.subStoryListZone);
  const subStoryButton = useSelector((state) => state.subStoryButton);
  const subStoryForm = useSelector((state) => state.subStoryForm);
  const {
    handleError,
    handleUserError,
  } = props;
  return (
    <div>
      <div id="substory-list-flex">
        {subStoryList
          ? (
            <div className="white-text" id="substory-list">
              { subNum === 1
                ? <p id="one-addendum">There is 1 addendum file associated with this file</p>
                : (
                  <p id="multiple-addendums">
                    There are
                    { ' ' }
                    { subNum }
                    { ' ' }
                    addendum files associated with this file
                  </p>
                ) }
            </div>
          ) : <div /> }
      </div>
      <div id="substory-list-button-flex">
        {subStoryListButtonFlex
          ? (
            <div id="substory-list-button-flex-zone">
              <ShowSubStories />
            </div>
          ) : <div />}
      </div>
      <div>
        <div>
          {subStoryListZone
            ? (
              <div id="substory-list-zone">
                <ol id="substory-list-zone-list">
                  <SubStoryList
                    handleError={handleError}
                    handleUserError={handleUserError}
                  />
                </ol>
              </div>
            ) : null}
        </div>
      </div>
      <div id="substory-story-button-flex">
        {subStoryButton
          ? (
            <div id="sub-story-button">
              <ShowSubForm />
            </div>
          ) : <div />}
      </div>
      {subStoryForm
        ? (
          <div id="sub-story-form">
            <SubStoryForm
              handleUserError={handleUserError}
            />
          </div>
        ) : null}
    </div>
  );
};
SubStory.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStory.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStory;
