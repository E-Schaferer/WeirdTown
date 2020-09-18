import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const SubStoryListItem = (props) => {
  const { subs, handleListClick, handleError } = props;
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
      <ol>
        { subList }
      </ol>
    </div>
  );
};
SubStoryListItem.propTypes = {
  subs: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleListClick: PropTypes.func,
  handleError: PropTypes.func,
};
SubStoryListItem.defaultProps = {
  handleListClick: undefined,
  handleError: undefined,
};

export default SubStoryListItem;
