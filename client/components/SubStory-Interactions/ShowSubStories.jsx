import React from 'react';
import { Button } from 'react-bootstrap';

const ShowSubStories = () => {
  const onClick = () => {
    document.getElementById('substory-list-zone').classList.remove('hidden');
    document.getElementById('substory-list').classList.add('hidden');
    document.getElementById('substory-list-button-flex-zone').classList.add('hidden');
    document.getElementById('substory-sub-list').classList.remove('hidden');
    document.getElementById('substory-render-zone').classList.add('hidden');
  };
  return (
    <Button
      className="clickable"
      onClick={onClick}
    >
      Show Addendum Files
    </Button>
  );
};

export default ShowSubStories;
