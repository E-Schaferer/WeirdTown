import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ShowSubStories = (props) => {
  const { onShowSubStories } = props;
  return (
    <Button
      className="clickable"
      onClick={onShowSubStories}
    >
      Show Addendum Files
    </Button>
  );
};
ShowSubStories.propTypes = {
  onShowSubStories: PropTypes.func.isRequired,
};

export default ShowSubStories;
