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
    if (!document.getElementById('like-click').classList.contains('disabled')) {
      const { subStory, likeGoUp } = this.props;
      Axios.put('/subLike', {
        id: subStory.id,
      })
        .then((result) => {
          console.log(result);
          likeGoUp();
          document.getElementById('like-click').classList.add('disabled');
          document.getElementById('dislike-click').classList.remove('disabled');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  dislike() {
    if (!document.getElementById('dislike-click').classList.contains('disabled')) {
      const { subStory, likeGoDown } = this.props;
      Axios.put('/subDislike', {
        id: subStory.id,
      })
        .then((result) => {
          console.log(result);
          likeGoDown();
          document.getElementById('like-click').classList.remove('disabled');
          document.getElementById('dislike-click').classList.add('disabled');
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
  likeGoUp: PropTypes.isRequired,
  likeGoDown: PropTypes.isRequired,
};

export default SubStoryRender;
