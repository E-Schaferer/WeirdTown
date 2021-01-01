import React from 'react';
import { useSelector } from 'react-redux';

import SubStoryForm from '../SubStoryForm/SubStoryForm';
import SubStoryList from '../SubStoryList/SubStoryList';
import ShowSubForm from './ShowSubForm';
import ShowSubStories from './ShowSubStories';

const SubStory = () => {
  const subStoryPrime = useSelector((state) => state.renderReducer.subStoryPrime);

  return (
    <div>
      {subStoryPrime ? (
        <div>
          <ShowSubStories />
          <div>
            <ol>
              <SubStoryList />
            </ol>
          </div>
          <ShowSubForm />
          <SubStoryForm />
        </div>
      ) : null}
    </div>
  );
};

export default SubStory;
