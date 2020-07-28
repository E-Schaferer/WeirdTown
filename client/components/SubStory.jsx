import React from 'react';
import PropTypes from 'prop-types';
import SubStoryForm from './SubStoryForm';
import SubStoryList from './SubStoryList';

class SubStory extends React.Component {
  static showSubForm() {
    document.getElementById('sub-story-form').classList.toggle('hidden');
  }

  static showSubStories() {
    document.getElementById('substory-list-zone').classList.remove('hidden');
    document.getElementById('substory-list').classList.add('hidden');
    document.getElementById('substory-list-button-flex-zone').classList.add('hidden');
    document.getElementById('substory-sub-list').classList.remove('hidden');
    document.getElementById('substory-render-zone').classList.add('hidden');
  }

  render() {
    const {
      subs, subNum, subSubmit, currentStory,
    } = this.props;
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
            <button className="clickable" type="button" onClick={SubStory.showSubStories}>Show addendum files</button>
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
            <button className="clickable" type="button" onClick={SubStory.showSubForm}>Write Your Own Sub-Story</button>
          </div>
        </div>
        <div className="hidden" id="sub-story-form">
          <SubStoryForm subSubmit={subSubmit} />
        </div>
      </div>
    );
  }
}
SubStory.propTypes = {
  subs: PropTypes.isRequired,
  subNum: PropTypes.number.isRequired,
  subSubmit: PropTypes.func.isRequired,
  currentStory: PropTypes.isRequired,
};

export default SubStory;
