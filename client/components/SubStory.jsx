import React from 'react';
import PropTypes from 'prop-types';
import SubStoryForm from './SubStoryForm';
import SubStoryList from './SubStoryList';
import ShowSubForm from './SubStory-Interactions/ShowSubForm';
import ShowSubStories from './SubStory-Interactions/ShowSubStories';

const SubStory = (props) => {
  const {
    subs,
    subNum,
    currentStory,
    handleSort,
    subStoryList,
    subStoryListButtonFlex,
    subStoryListZone,
    subStoryButton,
    subStoryForm,
    subStorySubList,
    subStoryRenderZone,
    subStoryFormSubmit,
    onShowSubStories,
    onSubStoryListItemClick,
    onGoBack,
    onShowSubForm,
  } = props;
  return (
    <div>
      <div id="substory-list-flex">
        {subStoryList
          ? (
            <div className="white-text" id="substory-list">
              { subNum === 1
                ? <p>There is 1 addendum file associated with this file</p>
                : (
                  <p>
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
              <ShowSubStories onShowSubStories={onShowSubStories} />
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
                    subs={subs}
                    currentStory={currentStory}
                    handleSort={handleSort}
                    onSubStoryListItemClick={onSubStoryListItemClick}
                    onGoBack={onGoBack}
                    subStorySubList={subStorySubList}
                    subStoryRenderZone={subStoryRenderZone}
                  />
                </ol>
              </div>
            ) : <div />}
        </div>
      </div>
      <div id="substory-story-button-flex">
        {subStoryButton
          ? (
            <div id="sub-story-button">
              <ShowSubForm onShowSubForm={onShowSubForm} />
            </div>
          ) : <div />}
      </div>
      {subStoryForm
        ? (
          <div id="sub-story-form">
            <SubStoryForm subStoryFormSubmit={subStoryFormSubmit} />
          </div>
        ) : <div />}
    </div>
  );
};
SubStory.propTypes = {
  currentStory: PropTypes.shape({
    storyid: PropTypes.number,
    story: PropTypes.string,
    storylocation: PropTypes.string,
    storyname: PropTypes.string,
    thingsseen: PropTypes.string,
    thingsheard: PropTypes.string,
  }).isRequired,
  subs: PropTypes.arrayOf(PropTypes.object).isRequired,
  subNum: PropTypes.number.isRequired,
  handleSort: PropTypes.func.isRequired,
  subStoryList: PropTypes.bool.isRequired,
  subStoryListButtonFlex: PropTypes.bool.isRequired,
  subStoryListZone: PropTypes.bool.isRequired,
  subStoryButton: PropTypes.bool.isRequired,
  subStoryForm: PropTypes.bool.isRequired,
  subStorySubList: PropTypes.bool.isRequired,
  subStoryRenderZone: PropTypes.bool.isRequired,
  subStoryFormSubmit: PropTypes.func.isRequired,
  onShowSubStories: PropTypes.func.isRequired,
  onSubStoryListItemClick: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onShowSubForm: PropTypes.func.isRequired,
};

export default SubStory;
