import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = ({ handleUserError, handleError }) => {
  const absentStoryPrime = useSelector((state) => state.renderReducer.absentStoryPrime);

  return (
    <div>
      {absentStoryPrime ? (
        <div>
          <StoryButtonClick />
          <StoryForm
            handleUserError={handleUserError}
            handleError={handleError}
          />
        </div>
      ) : null}
    </div>
  );
};

AbsentStory.propTypes = {
  handleUserError: PropTypes.func,
  handleError: PropTypes.func,
};
AbsentStory.defaultProps = {
  handleUserError: undefined,
  handleError: undefined,
};

export default AbsentStory;
