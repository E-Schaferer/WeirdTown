import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const SubStoryDislike = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const dislikeClick = () => {
    const {
      subStory,
      dislike,
      handleError,
      handleUserError,
    } = props;
    if (isAuthenticated) {
      Axios.put('/subDislike', {
        id: subStory.id,
        userid: user.email,
      })
        .then(() => {
          dislike();
        })
        .catch((err) => {
          handleError(['dislikeClick', err]);
        });
    } else {
      const message = 'Please sign in first.';
      handleUserError(message);
    }
  };

  return (
    <Button
      onClick={dislikeClick}
      id="dislike-click"
    >
      Dislike
    </Button>
  );
};
SubStoryDislike.propTypes = {
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
  dislike: PropTypes.func,
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStoryDislike.defaultProps = {
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
  dislike: undefined,
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStoryDislike;
