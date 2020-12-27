import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SubStoryLike = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const id = useSelector((state) => state.subStory.id);

  const likeClick = () => {
    const {
      handleError,
      handleUserError,
    } = props;
    if (isAuthenticated) {
      Axios.put('/subLike', {
        id,
        user: user.email,
      })
        .then(() => {
          useDispatch({
            type: 'subStoryLike/like',
            payload: 1,
          });
        })
        .catch((err) => {
          handleError(['likeClick', err]);
        });
    } else {
      const message = 'Please sign in first.';
      handleUserError(message);
    }
  };

  return (
    <Button
      onClick={likeClick}
      id="like-click"
    >
      Like
    </Button>
  );
};
SubStoryLike.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStoryLike.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStoryLike;
