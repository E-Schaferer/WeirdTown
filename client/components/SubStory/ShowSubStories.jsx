import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showErrorAction, showSubAction } from '../../redux/actions/actionCreators';

const ShowSubStories = () => {
  const showSubStoriesButton = useSelector((state) => state.renderReducer.showSubStoriesButton);
  const id = useSelector((state) => state.storyReducer.currentStory.id);
  const dispatch = useDispatch();
  const showSubDispatcher = (result) => {
    dispatch(showSubAction(result));
  };
  const errDispatcher = (err) => {
    dispatch(showErrorAction(err));
  };

  // this function will query the database for substories related to the current story
  const showSub = () => {
    Axios.get(`/subStoryGet?storyId=${id}`)
      .then((result) => {
        showSubDispatcher(result);
      })
      .catch((err) => {
        errDispatcher(err);
      });
  };

  return (
    <div>
      {showSubStoriesButton ? (
        <Button
          className="clickable"
          onClick={showSub}
        >
          Show Associated Files
        </Button>
      ) : null}
      {/* <div className="white-text">
        {subNum === 1
          ? <p>There is 1 addendum file associated with this file</p>
          : (
            <p>
              There are
              { ' '}
              {subNum}
              {' '}
              addendum files associated with this file
            </p>
          )}
      </div> */}
    </div>
  );
};

export default ShowSubStories;
