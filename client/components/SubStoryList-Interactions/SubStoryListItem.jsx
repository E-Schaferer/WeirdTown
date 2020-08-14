import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const SubStoryListItem = (props) => {
  const { subs, handleListClick } = props;
  const onClick = (event) => {
    Axios.get(`/substoryGetSpec?id=${event.target.getAttribute('name')}`)
      .then((result) => {
        console.log(result);
        document.getElementById('substory-sub-list').classList.add('hidden');
        document.getElementById('substory-render-zone').classList.remove('hidden');
        handleListClick(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const subList = subs.map((sub) => <li name={sub.id} role="presentation" className="clickable clickable-highlight" onClick={onClick}>{sub.subname}</li>);
  return (
    <div>
      <ol>
        { subList }
      </ol>
    </div>
  );
};
SubStoryListItem.propTypes = {
  subs: PropTypes.isRequired,
  handleListClick: PropTypes.isRequired,
};

export default SubStoryListItem;
