import React from 'react';
import { Button } from 'react-bootstrap';

const ShowSubForm = () => {
  const onClick = () => {
    document.getElementById('sub-story-form').classList.toggle('hidden');
    document.getElementById('sub-story-button').classList.add('hidden');
  };
  return (
    <Button
      className="clickable"
      onClick={onClick}
    >
      Write Your Own Sub-Story
    </Button>
  );
};

export default ShowSubForm;
