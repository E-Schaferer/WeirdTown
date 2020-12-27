import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const SubStoryListItem = (props) => {
  const { handleError } = props;
  const subs = useSelector((state) => state.subs);
  const dispatch = useDispatch();
  const handleListClick = (result) => {
    dispatch({
      type: 'subStoryList/handleListClick',
      payload: result.data[0],
    });
  };

  const onClick = (event) => {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        handleListClick(result);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  const subList = subs.map((sub) => <li id={`sub-item-${sub.id}`} name={sub.id} key={sub.id} role="presentation" className="clickable clickable-highlight" onClick={onClick}>{sub.subname}</li>);
  return (
    <div>
      <ol data-testid="sub-list" className="sub-list">
        { subList }
      </ol>
    </div>
  );
};
SubStoryListItem.propTypes = {
  handleError: PropTypes.func,
};
SubStoryListItem.defaultProps = {
  handleError: undefined,
};

export default SubStoryListItem;
