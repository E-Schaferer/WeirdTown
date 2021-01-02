import React from 'react';
import { useSelector } from 'react-redux';

import StoryForm from '../StoryForm/StoryForm';
import StoryButtonClick from './StoryButtonClick';

const AbsentStory = () => {
  const absentStoryPrime = useSelector((state) => state.renderReducer.absentStoryPrime);

  return (
    <div>
      {absentStoryPrime ? (
        <div className="flex centered">
          <StoryButtonClick />
          <StoryForm />
        </div>
      ) : null}
    </div>
  );
};

export default AbsentStory;
