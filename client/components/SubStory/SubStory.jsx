import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubStoryForm from '../SubStoryForm/SubStoryForm';
import SubStoryList from '../SubStoryList/SubStoryList';
import ShowSubForm from './ShowSubForm';
import ShowSubStories from './ShowSubStories';

const SubStory = (props) => {
  const subStoryList = useSelector((state) => state.subStoryList);
  const subNum = useSelector((state) => state.subNum);
  const subStoryButton = useSelector((state) => state.subStoryButton);
  const subStoryForm = useSelector((state) => state.subStoryForm);
  const subStoryPrompt = useSelector((state) => state.subStoryPrompt);
  const subStory = useSelector((state) => state.renderReducer.subStory);
  const {
    handleError,
    handleUserError,
  } = props;
  return (
    <div>
      {subStory ? (
        <div>
          <div className="white-text">
            {subNum === 1
              ? <p>There is 1 addendum file associated with this file</p>
              : (
                <p>
                  There are
                  { ' '}
                  {subNum}
                  {' '}
                  addendum files associated with this file
                </p>
              )}
          </div>
          <ShowSubStories />
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
      ) : (<div />)}
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
