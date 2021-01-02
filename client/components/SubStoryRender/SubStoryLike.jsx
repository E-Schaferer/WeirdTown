import React from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showErrorAction, subLikeAction } from '../../redux/actions/actionCreators';

const SubStoryLike = () => {
  const { user, isAuthenticated } = useAuth0();
  const id = useSelector((state) => state.storyReducer.subStory.id);
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(subLikeAction());
  };
  const errDispatcher = (err) => {
    dispatch(showErrorAction(err));
  };

  const likeClick = () => {
    if (isAuthenticated) {
      Axios.put('/subLike', {
        id,
        user: user.email,
      })
        .then(() => {
          dispatcher();
        })
        .catch((err) => {
          errDispatcher(err);
        });
    } else {
      errDispatcher('Please sign in first');
    }
  };

  return (
    <Button className="btn-light" onClick={likeClick}>Like</Button>
  );
};

export default SubStoryLike;
