import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ShowSubForm = (props) => {
  const { onShowSubForm } = props;
  return (
    <Button
      className="clickable"
      onClick={onShowSubForm}
    >
      Write Your Own Sub-Story
    </Button>
  );
};
ShowSubForm.propTypes = {
  onShowSubForm: PropTypes.func,
};
ShowSubForm.defaultProps = {
  onShowSubForm: undefined,
};

export default ShowSubForm;
