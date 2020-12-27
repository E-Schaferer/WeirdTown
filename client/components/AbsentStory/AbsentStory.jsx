import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = (props) => {
  const {
    handleUserError,
  } = props;
  const storySubmissionPrompt = useSelector((state) => state.storySubmissionPrompt);
  const storyFormZone = useSelector((state) => state.storyFormZone);
  return (
    <div>
      {storySubmissionPrompt
        ? (
          <div>
            <h2>No stories have been told about this place. Would you like to share one?</h2>
            <StoryButtonClick />
          </div>
        ) : <div />}
      {storyFormZone
        ? (
          <div>
            <StoryForm
              handleUserError={handleUserError}
            />
          </div>
        ) : <div />}
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
