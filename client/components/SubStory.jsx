import React from 'react';
import SubStoryForm from './SubStoryForm.jsx';

class SubStory extends React.Component {
  constructor(props) {
    super(props);
    this.showSubForm = this.showSubForm.bind(this);
  }

  showSubForm() {
    document.getElementById("sub-story-form").classList.toggle("hidden");
  }

  render() {
    return (
      <div>
        <div id="substory-list">
          <p>placeholder</p>
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
