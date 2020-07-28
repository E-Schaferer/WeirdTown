import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import SubStoryRender from './SubStoryRender';

class SubStoryList extends React.Component {
  static goBack() {
    document.getElementById('substory-sub-list').classList.remove('hidden');
    document.getElementById('substory-render-zone').classList.add('hidden');
  }

  constructor(props) {
    super(props);
    this.state = {
      subStory: {
        id: 'REDACTED',
        storyid: 'REDACTED',
        sublocation: 'REDACTED',
        subheard: 'REDACTED',
        subseen: 'REDACTED',
        subname: 'REDACTED',
        substory: 'REDACTED',
        sublikes: 'REDACTED',
      },
    };
    this.listClick = this.listClick.bind(this);
  }

  listClick(event) {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        console.log(result);
        document.getElementById('substory-sub-list').classList.add('hidden');
        document.getElementById('substory-render-zone').classList.remove('hidden');
        this.setState({
          subStory: result.data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { subs, currentStory } = this.props;
    const { subStory } = this.state;
    const subList = subs.map((sub) => <li name={sub.id} role="presentation" className="clickable clickable-highlight" onClick={this.listClick}>{sub.subname}</li>);
    return (
      <div>
        <div id="substory-sub-list">
          <div id="substory-weird-header">
            <h5>Department of Weird Stuff</h5>
          </div>
          <div id="substory-list-main-header">
            <h1>
              Files associated with file No°
              { ' ' }
              {currentStory.id}
              :
            </h1>
          </div>
          <div>
            { subList }
          </div>
        </div>
        <div className="hidden" id="substory-render-zone">
          <div>
            <h3 id="substory-render-goback" role="presentation" className="underlined clickable white-text" onClick={SubStoryList.goBack}>Return to the substory list</h3>
          </div>
          <div id="substory-render-actual">
            <SubStoryRender subStory={subStory} />
          </div>
        </div>
      </div>
    );
  }
}
SubStoryList.propTypes = {
  subs: PropTypes.isRequired,
  currentStory: PropTypes.isRequired,
};

export default SubStoryList;
