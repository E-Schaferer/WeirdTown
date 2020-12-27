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
  const subStoryListButtonFlex = useSelector((state) => state.subStoryListButtonFlex);
  const subStoryListZone = useSelector((state) => state.subStoryListZone);
  const subStoryButton = useSelector((state) => state.subStoryButton);
  const subStoryForm = useSelector((state) => state.subStoryForm);
  const {
    handleError,
    handleUserError,
  } = props;
  return (
    <div>
      {subStoryList
        ? (
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
        ) : <div />}
      {subStoryListButtonFlex
        ? (
          <div>
            <ShowSubStories />
          </div>
        ) : <div />}
      {subStoryListZone
        ? (
          <div>
            <ol>
              <SubStoryList
                handleError={handleError}
                handleUserError={handleUserError}
              />
            </ol>
          </div>
        ) : null}
      {subStoryButton
        ? (
          <div>
            <ShowSubForm />
          </div>
        ) : <div />}
      {subStoryForm
        ? (
          <div>
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
