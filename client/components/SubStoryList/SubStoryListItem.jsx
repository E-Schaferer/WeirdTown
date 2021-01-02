import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { showErrorAction, substoryListClickAction } from '../../redux/actions/actionCreators';

const SubStoryListItem = () => {
  const subs = useSelector((state) => state.storyReducer.subs);
  const dispatch = useDispatch();
  const dispatcher = (result) => {
    dispatch(substoryListClickAction(result));
  };
  const errDispatcher = (err) => {
    dispatch(showErrorAction(err));
  };

  const handleListClick = (result) => {
    dispatcher(result);
  };

  const onClick = (event) => {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        handleListClick(result);
      })
      .catch((err) => {
        errDispatcher(err);
      });
  };

  // clean this subList up
  const subList = subs.map((sub) => <li id={`sub-item-${sub.id}`} name={sub.id} key={sub.id} role="presentation" className="clickable clickable-highlight padding-small" onClick={onClick}>{sub.subname}</li>);
  return (
    <div>
      <ol data-testid="sub-list" className="sub-list">
        { subList }
      </ol>
    </div>
  );
};

export default SubStoryListItem;
