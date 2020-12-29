import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ShowSubStories = () => {
  const showSubStoriesButton = useSelector((state) => state.renderReducer.showSubStoriesButton);
  const id = useSelector((state) => state.storyReducer.currentStory.id);
  const dispatch = useDispatch();

  // this function will query the database for substories related to the current story
  const showSub = () => {
    Axios.get(`/subStoryGet?storyId=${id}`)
      .then((result) => {
        dispatch({
          type: 'showSubStories/showSub',
          payload: {
            subNum: result.data.length,
            subs: result.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ErrorModal/showError',
          payload: err,
        });
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
