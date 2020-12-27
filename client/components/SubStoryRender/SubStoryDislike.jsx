import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SubStoryDislike = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const id = useSelector((state) => state.subStory.id);
  const dispatch = useDispatch();
  const dislikeClick = () => {
    const {
      handleError,
      handleUserError,
    } = props;
    if (isAuthenticated) {
      Axios.put('/subDislike', {
        id,
        userid: user.email,
      })
        .then(() => {
          dispatch({
            type: 'subStoryDislike/dislike',
            payload: 1,
          });
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
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStoryDislike.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStoryDislike;
