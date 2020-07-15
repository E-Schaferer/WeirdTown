import React from 'react';
import PropTypes from 'prop-types';
import SubStoryForm from './SubStoryForm';

class SubStory extends React.Component {
  static showSubForm() {
    document.getElementById('sub-story-form').classList.toggle('hidden');
  }

  constructor(props) {
    super(props);
    this.showSubStories = this.showSubStories.bind(this);
  }

  showSubStories() {
    const { subs } = this.props;
    document.getElementById('substory-list-zone').classList.remove('hidden');
    document.getElementById('substory-list-zone').innerHTML = '';
    for (let i = 0; i < subs.length; i += 1) {
      document.getElementById('substory-list-zone').append(
        <div className="sub-name">
          <h3>
            case file $
            {subs[i].id}
          </h3>
          <h1>{subs[i].subname}</h1>
        </div>,
      );
    }
  }

  render() {
    const { subNum, subSubmit } = this.props;
    return (
      <div>
        <div id="substory-list-flex">
          <div className="white-text" id="substory-list">
            { subNum === 1
              ? <p>There is 1 addendum file associated with this file</p>
              : (
                <p>
                  There are
                  { subNum }
                  addendum files associated with this file
                </p>
              ) }
          </div>
        </div>
        <div id="substory-list-button-flex">
          <div>
            <button type="button" onClick={this.showSubStories}>Show addendum files</button>
          </div>
        </div>
        <div>
          <div>
            <div id="substory-list-zone" />
          </div>
        </div>
        <div id="substory-story-button-flex">
          <div id="sub-story-button">
            <button type="button" onClick={this.showSubForm}>Write Your Own Sub-Story</button>
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
};

export default SubStory;
