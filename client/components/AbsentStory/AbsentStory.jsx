import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = (props) => {
  const {
    handleUserError,
  } = props;
  return (
    <div>
      <StoryButtonClick />
      <StoryForm handleUserError={handleUserError} />
    </div>
  );
};
AbsentStory.propTypes = {
  handleUserError: PropTypes.func,
};
AbsentStory.defaultProps = {
  handleUserError: undefined,
};

export default AbsentStory;
