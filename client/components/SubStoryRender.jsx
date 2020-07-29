import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class SubStoryRender extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  like() {
    const { subStory } = this.props;
    Axios.post('/subLike', {
      subName: subStory.subname,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dislike() {
    const { subStory } = this.props;
    Axios.post('/subDislike', {
      subName: subStory.subname,
    })
      .then((result) => {
        console.log(result);
        subStory.subLikes += 1;
        this.setState({});
      })
      .catch((err) => {
        console.log(err);
        subStory.subLikes -= 1;
        this.setState({});
      });
  }

  render() {
    const { subStory } = this.props;
    return (
      <div>
        <div id="story-header">
          <div>
            <h5>Department of Weird Stuff</h5>
            <h5>
              Case No°
              { ' ' }
              {10000 + subStory.storyid}
              =
              {subStory.id}
            </h5>
          </div>
        </div>
        <div id="story-classified">
          <div>
            <h1>CLASSIFIED</h1>
          </div>
        </div>
        <div id="substory-likes">
          <h4>
            likes:
            { ' ' }
            {subStory.sublikes}
          </h4>
          <p id="like-click" role="presentation" className="underlined clickable" onClick={this.like}>like</p>
          <p id="dislike-click" role="presentation" className="underlined clickable" onClick={this.dislike}>dislike</p>
        </div>
        <div>
          <h3 className="underlined">INCIDENT NAME:</h3>
          {subStory.subname}
        </div>
        <div>
          <h3 className="underlined">INCIDENT LOCATION:</h3>
          {subStory.sublocation}
        </div>
        <div>
          <h3 className="underlined">WITNESS DESCRIPTION:</h3>
          {subStory.subseen}
          {subStory.subheard}
        </div>
        <div>
          <h3 className="underlined">TIMELINE OF EVENTS:</h3>
          {subStory.substory}
        </div>
        <div id="secret-footer">
          <h5 className="top-secret">TOP SECRET</h5>
        </div>
      </div>
    );
  }
}

SubStoryRender.propTypes = {
  subStory: PropTypes.isRequired,
};

export default SubStoryRender;
