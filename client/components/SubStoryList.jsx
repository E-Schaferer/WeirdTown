import React from 'react';
import PropTypes from 'prop-types';
import SubStoryRender from './SubStoryRender';
import GoBack from './SubStoryList-Interactions/GoBack';
import SubStoryListItem from './SubStoryList-Interactions/SubStoryListItem';
import SubstorySort from './SubStoryList-Interactions/SubstorySort';

class SubStoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subStory: {
        id: 0,
        storyid: 0,
        sublocation: 'REDACTED',
        subheard: 'REDACTED',
        subseen: 'REDACTED',
        subname: 'REDACTED',
        substory: 'REDACTED',
        sublikes: 0,
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
    const { onSubStoryListItemClick } = this.props;
    onSubStoryListItemClick();
    this.setState({
      subStory: result.data[0],
    });
  }

  render() {
    const {
      subs,
      subStorySubList,
      subStoryRenderZone,
      currentStory,
      handleSort,
      onGoBack,
    } = this.props;
    const { subStory } = this.state;
    return (
      <div>
        {subStorySubList
          ? (
            <div id="substory-sub-list">
              <div id="substory-weird-header">
                <h5>Department of Weird Stuff</h5>
              </div>
              <div id="substory-list-main-header">
                <h1>
                  Files associated with file No°
                  { ' ' }
                  {currentStory.storyid}
                  :
                </h1>
              </div>
              <div id="substory-sort">
                <SubstorySort handleSort={handleSort} subs={subs} />
              </div>
              <div id="substory-list-item-render">
                <SubStoryListItem
                  subs={subs}
                  handleListClick={this.handleListClick}
                />
              </div>
            </div>
          ) : <div />}
        {subStoryRenderZone
          ? (
            <div id="substory-render-zone">
              <div>
                <GoBack onGoBack={onGoBack} />
              </div>
              <div id="substory-render-actual">
                <SubStoryRender
                  likeGoUp={this.likeGoUp}
                  likeGoDown={this.likeGoDown}
                  subStory={subStory}
                />
              </div>
            </div>
          ) : <div />}
      </div>
    );
  }
}
SubStoryList.propTypes = {
  subs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStory: PropTypes.shape({
    storyid: PropTypes.number,
    story: PropTypes.string,
    storylocation: PropTypes.string,
    storyname: PropTypes.string,
    thingsseen: PropTypes.string,
    thingsheard: PropTypes.string,
  }).isRequired,
  subStorySubList: PropTypes.bool.isRequired,
  subStoryRenderZone: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  onSubStoryListItemClick: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default SubStoryList;
