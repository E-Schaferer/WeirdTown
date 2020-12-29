import React from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SubStoryLike = () => {
  const { user, isAuthenticated } = useAuth0();
  const id = useSelector((state) => state.storyReducer.subStory.id);
  const dispatch = useDispatch();

  const likeClick = () => {
    if (isAuthenticated) {
      Axios.put('/subLike', {
        id,
        user: user.email,
      })
        .then(() => {
          dispatch({
            type: 'subStoryLike/like',
            payload: 1,
          });
        })
        .catch((err) => {
          dispatch({
            type: 'ErrorModal/showError',
            payload: err,
          });
        });
    } else {
      dispatch({
        type: 'ErrorModal/showError',
        payload: 'Please sign in first.',
      });
    }
  };

  return (
    <Button onClick={likeClick}>Like</Button>
  );
};

export default SubStoryLike;
