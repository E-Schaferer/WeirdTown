import React from 'react';
import PropTypes from 'prop-types';
import SubStoryRender from './SubStoryRender';
import GoBack from './SubStoryList-Interactions/GoBack';
import SubStoryListItem from './SubStoryList-Interactions/SubStoryListItem';

class SubStoryList extends React.Component {
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
    this.handleListClick = this.handleListClick.bind(this);
    this.likeGoUp = this.likeGoUp.bind(this);
    this.likeGoDown = this.likeGoDown.bind(this);
  }

  likeGoUp() {
    const { subStory } = this.state;
    subStory.sublikes += 1;
    this.setState({});
  }

  likeGoDown() {
    const { subStory } = this.state;
    subStory.sublikes -= 1;
    this.setState({});
  }

  handleListClick(result) {
    this.setState({
      subStory: result.data[0],
    });
  }

  render() {
    const { subs, currentStory } = this.props;
    const { subStory } = this.state;
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
            <SubStoryListItem subs={subs} handleListClick={this.handleListClick} />
          </div>
        </div>
        <div className="hidden" id="substory-render-zone">
          <div>
            <GoBack />
          </div>
          <div id="substory-render-actual">
            <SubStoryRender
              likeGoUp={this.likeGoUp}
              likeGoDown={this.likeGoDown}
              subStory={subStory}
            />
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
