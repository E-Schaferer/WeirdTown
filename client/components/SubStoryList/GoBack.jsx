import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const GoBack = (props) => {
  const { onGoBack } = props;
  return (
    <Button
      onClick={onGoBack}
      className="underlined clickable white-text"
      id="substory-render-goback"
    >
      Return to the substory list
    </Button>
  );
};
GoBack.propTypes = {
  onGoBack: PropTypes.func,
};
GoBack.defaultProps = {
  onGoBack: undefined,
};

export default GoBack;
