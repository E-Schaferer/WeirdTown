import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const SubStoryLike = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const likeClick = () => {
    const { subStory, like, handleError } = props;
    if (isAuthenticated) {
      Axios.put('/subLike', {
        id: subStory.id,
        user: user.email,
      })
        .then(() => {
          like();
        })
        .catch((err) => {
          handleError(['likeClick', err]);
        });
    } else {
      // needs alert
      console.log('Please log in to like a story.');
    }
  };

  return (
    <Button
      onClick={likeClick}
    >
      Like
    </Button>
  );
};
SubStoryLike.propTypes = {
  subStory: PropTypes.shape({
    id: PropTypes.number,
    storyid: PropTypes.number,
    sublocation: PropTypes.string,
    subheard: PropTypes.string,
    subseen: PropTypes.string,
    subname: PropTypes.string,
    substory: PropTypes.string,
    sublikes: PropTypes.number,
  }),
  like: PropTypes.func,
  handleError: PropTypes.func,
};
SubStoryLike.defaultProps = {
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
  like: undefined,
  handleError: undefined,
};

export default SubStoryLike;
