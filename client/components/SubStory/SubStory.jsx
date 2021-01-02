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
          <div className="flex centered">
            <ol className="width-majority">
              <SubStoryList />
            </ol>
          </div>
          <div className="flex centered">
            <SubStoryForm />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SubStory;
