import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const SubStoryListItem = (props) => {
  const { subs, handleListClick } = props;
  const onClick = (event) => {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        handleListClick(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const subList = subs.map((sub) => <li name={sub.id} key={sub.id} role="presentation" className="clickable clickable-highlight" onClick={onClick}>{sub.subname}</li>);
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
};
SubStoryListItem.defaultProps = {
  handleListClick: undefined,
};

export default SubStoryListItem;
