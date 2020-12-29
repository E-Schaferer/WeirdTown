import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const SubStoryListItem = () => {
  const subs = useSelector((state) => state.storyReducer.subs);
  const dispatch = useDispatch();

  const handleListClick = (result) => {
    dispatch({
      type: 'subStoryListItem/handleListClick',
      payload: result.data[0],
    });
  };

  const onClick = (event) => {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        handleListClick(result);
      })
      .catch((err) => {
        dispatch({
          type: 'ErrorModal/showError',
          payload: err,
        });
      });
  };

  // clean this subList up
  const subList = subs.map((sub) => <li id={`sub-item-${sub.id}`} name={sub.id} key={sub.id} role="presentation" className="clickable clickable-highlight" onClick={onClick}>{sub.subname}</li>);
  return (
    <div>
      <ol data-testid="sub-list" className="sub-list">
        { subList }
      </ol>
    </div>
  );
};

export default SubStoryListItem;
