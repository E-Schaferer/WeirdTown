import React from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showErrorAction, subDislikeAction } from '../../redux/actions/actionCreators';

const SubStoryDislike = () => {
  const { user, isAuthenticated } = useAuth0();
  const id = useSelector((state) => state.storyReducer.subStory.id);
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch(subDislikeAction());
  };
  const errDispatcher = (err) => {
    dispatch(showErrorAction(err));
  };

  const dislikeClick = () => {
    if (isAuthenticated) {
      Axios.put('/subDislike', {
        id,
        userid: user.email,
      })
        .then(() => {
          dispatcher();
        })
        .catch((err) => {
          errDispatcher(err);
        });
    } else {
      errDispatcher('please sign in first');
    }
  };

  return (
    <Button onClick={dislikeClick}>Dislike</Button>
  );
};

export default SubStoryDislike;
