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
      },
    };
    this.listClick = this.listClick.bind(this);
  }

  listClick() {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
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
    const { subs } = this.props;
    const { subStory } = this.state;
    const subList = subs.map((sub) => {
      return (
        <li name={sub.id} className="clickable clickable-highlight" onClick={this.listClick}>{sub.subname}</li>
      );
    });
    return (
      <div>
        <div id="substory-sub-list">
          <div>
            { subList }
          </div>
        </div>
        <div className="hidden" id="substory-render-zone">
          <div>
            <h3 id="substory-render-goback" className="underlined clickable" onClick={SubStoryList.goBack}>Return to the substory list</h3>
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
};

export default SubStoryList;
