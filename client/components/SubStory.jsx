import React from 'react';
import PropTypes from 'prop-types';
import SubStoryForm from './SubStoryForm';
import SubStoryList from './SubStoryList';
import ShowSubForm from './SubStory-Interactions/ShowSubForm';
import ShowSubStories from './SubStory-Interactions/ShowSubStories';

const SubStory = (props) => {
  const {
    subs, subNum, subStoryFormSubmit, currentStory,
  } = props;
  return (
    <div>
      <div id="substory-list-flex">
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
      </div>
      <div id="substory-list-button-flex">
        <div id="substory-list-button-flex-zone">
          <ShowSubStories />
        </div>
      </div>
      <div>
        <div>
          <div id="substory-list-zone">
            <ol id="substory-list-zone-list">
              <SubStoryList subs={subs} currentStory={currentStory} />
            </ol>
          </div>
        </div>
      </div>
      <div id="substory-story-button-flex">
        <div id="sub-story-button">
          <ShowSubForm />
        </div>
      </div>
      <div className="hidden" id="sub-story-form">
        <SubStoryForm subStoryFormSubmit={subStoryFormSubmit} />
      </div>
    </div>
  );
};
SubStory.propTypes = {
  subs: PropTypes.isRequired,
  subNum: PropTypes.number.isRequired,
  subStoryFormSubmit: PropTypes.func.isRequired,
  currentStory: PropTypes.isRequired,
};

export default SubStory;
