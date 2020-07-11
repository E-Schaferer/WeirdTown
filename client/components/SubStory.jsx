import React from 'react';
import SubStoryForm from './SubStoryForm.jsx';

class SubStory extends React.Component {
  constructor(props) {
    super(props);
    this.showSubForm = this.showSubForm.bind(this);
    this.showSubStories = this.showSubStories.bind(this);
  }

  showSubForm() {
    document.getElementById("sub-story-form").classList.toggle("hidden");
  }

  showSubStories() {
    document.getElementById('substory-list-zone').classList.remove('hidden');
    document.getElementById('substory-list-zone').innerHTML = '';
    for (let i = 0; i < this.props.subs.length; i++) {
      document.getElementById('substory-list-zone').append(
        <div className='sub-name'>
          <h3>case file ${this.props.subs[i].id}</h3>
          <h1>{this.props.subs[i].subname}</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="white-text" id="substory-list">
          { this.props.subNum === 1 ?
            <p>There is 1 addendum file associated with this file</p>
            : <p>There are {this.props.subNum} addendum files associated with this file</p> }
          <button onClick={this.showSubStories}>Show addendum files</button>
          <div id="substory-list-zone"></div>
        </div>
        <div id="sub-story-button">
          <button onClick={this.showSubForm}>Write Your Own Sub-Story</button>
        </div>
        <div className="hidden" id="sub-story-form">
          <SubStoryForm subSubmit={this.props.subSubmit} />
        </div>
      </div>
    );
  }
}

export default SubStory;
