import React from 'react';
import PropTypes from 'prop-types';
import SubStorySubmit from './SubStoryForm-Interactions/SubStorySubmit';

const SubStoryForm = (props) => {
  const { subStoryFormSubmit } = props;
  return (
    <div id="sub-story-form-zone">
      <div id="substory-weird-header">
        <h5>Department of Weird Stuff</h5>
      </div>
      <div id="substory-header">
        <h1>
          INCIDENT
          { ' ' }
          {10000 + 1 }
          { ' ' }
          ADDENDUM FORM
        </h1>
      </div>
      <div id="substory-name">
        <label htmlFor="sub-name">
          Give the incident a name
          <textarea name="sub-name" rows="5" cols="75" type="text" id="input-substory-name" />
        </label>
      </div>
      <div id="substory-location">
        <label htmlFor="sub-location">
          Where did the incident take place?
          <textarea name="sub-location" rows="5" cols="75" type="text" id="input-substory-location" />
        </label>
      </div>
      <div id="substory-saw">
        <label htmlFor="sub-saw">
          What did you see?
          <textarea name="sub-saw" rows="5" cols="75" type="text" id="input-substory-saw" />
        </label>
      </div>
      <div id="substory-heard">
        <label htmlFor="sub-heard">
          What did you hear?
          <textarea name="sub-heard" rows="5" cols="75" type="text" id="input-substory-heard" />
        </label>
      </div>
      <div id="substory-story">
        <label htmlFor="sub-story">
          Describe the events that took place:
          <textarea name="sub-story" rows="5" cols="75" type="text" id="input-substory-story" />
        </label>
      </div>
      <div id="substory-button">
        <SubStorySubmit subStoryFormSubmit={subStoryFormSubmit} />
      </div>
      <div id="sub-footer">
        <h5 className="top-secret">TOP SECRET</h5>
      </div>
    </div>
  );
};
SubStoryForm.propTypes = {
  subStoryFormSubmit: PropTypes.func,
};
SubStoryForm.defaultProps = {
  subStoryFormSubmit: undefined,
};

export default SubStoryForm;
