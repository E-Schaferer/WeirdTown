import React from 'react';
import { Button } from 'react-bootstrap';

const GoBack = () => {
  const onClick = () => {
    document.getElementById('substory-sub-list').classList.remove('hidden');
    document.getElementById('substory-render-zone').classList.add('hidden');
  };
  return (
    <Button
      onClick={onClick}
      className="underlined clickable white-text"
      id="substory-render-goback"
    >
      Return to the substory list
    </Button>
  );
};

export default GoBack;
