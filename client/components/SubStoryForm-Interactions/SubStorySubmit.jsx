import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SubStorySubmit = (props) => {
  const { subSubmit } = props;
  const subSubmitClick = () => {
    const subName = document.getElementById('input-substory-name').value;
    const subLoc = document.getElementById('input-substory-location').value;
    const subSaw = document.getElementById('input-substory-saw').value;
    const subHeard = document.getElementById('input-substory-heard').value;
    const subStory = document.getElementById('input-substory-story').value;
    if (
      subName === ''
      || subLoc === ''
      || subSaw === ''
      || subHeard === ''
      || subStory === ''
    ) {
      alert('Please fill out all fields');
    } else {
      subSubmit(subName, subLoc, subHeard, subSaw, subStory);
    }
  };
  return (
    <Button
      onClick={subSubmitClick}
      className="clickable"
      id="substory-submit-button"
    >
      Submit Substory
    </Button>
  );
};
SubStorySubmit.propTypes = {
  subSubmit: PropTypes.isRequired,
};

export default SubStorySubmit;
