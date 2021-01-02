import React from 'react';
import { useSelector } from 'react-redux';

import SubStoryForm from '../SubStoryForm/SubStoryForm';
import SubStoryList from '../SubStoryList/SubStoryList';

const SubStory = () => {
  const subStoryPrime = useSelector((state) => state.renderReducer.subStoryPrime);

  return (
    <div>
      {subStoryPrime ? (
        <div>
          <div>
            <ol>
              <SubStoryList />
            </ol>
          </div>
          <SubStoryForm />
        </div>
      ) : null}
    </div>
  );
};

export default SubStory;
