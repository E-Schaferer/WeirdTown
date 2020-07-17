import React from 'react';
import PropTypes from 'prop-types';

const SubStoryRender = (props) => {
  const { subStory } = props;
  return (
    <div>
      <div>
        {subStory.subname}
      </div>
      <div>
        {subStory.sublocation}
      </div>
      <div>
        {subStory.subseen}
      </div>
      <div>
        {subStory.subheard}
      </div>
      <div>
        {subStory.substory}
      </div>
    </div>
  );
};
SubStoryRender.propTypes = {
  subStory: PropTypes.isRequired,
};

export default SubStoryRender;
