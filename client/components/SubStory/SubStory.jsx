import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import SubStoryForm from '../SubStoryForm/SubStoryForm';
import SubStoryList from '../SubStoryList/SubStoryList';
import ShowSubForm from './ShowSubForm';
import ShowSubStories from './ShowSubStories';

const SubStory = ({ handleError, handleUserError }) => {
  const subStoryPrime = useSelector((state) => state.renderReducer.subStoryPrime);

  return (
    <div>
      {subStoryPrime ? (
        <div>
          <ShowSubStories
            handleError={handleError}
          />
          <div>
            <ol>
              <SubStoryList
                handleError={handleError}
                handleUserError={handleUserError}
              />
            </ol>
          </div>
          <ShowSubForm />
          <SubStoryForm
            handleUserError={handleUserError}
          />
        </div>
      ) : null}
    </div>
  );
};

SubStory.propTypes = {
  handleError: PropTypes.func,
  handleUserError: PropTypes.func,
};
SubStory.defaultProps = {
  handleError: undefined,
  handleUserError: undefined,
};

export default SubStory;
