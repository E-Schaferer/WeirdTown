const initialState = {
  absentStoryRender: false, // AbsentStory
  storySubmissionPrompt: false, // submission-prompt
  storyFormZone: false, // story-form-zone
  presentStoryRender: false, // PresentStory
  subStoryPrompt: false, // substory-prompt
  subStory: false, // substory
  subStoryList: false, // substory-list
  subStoryListButtonFlex: false, // substory-list-button-flex-zone
  subStoryListZone: false, // substory-list-zone
  subStoryButton: false, // sub-story-button
  subStoryForm: false, // sub-story-form
  subStorySubList: false, // substory-sub-list
  subStoryRenderZone: false, // substory-render-zone
  errorZone: false,
  errorMsg: '',
};

const renderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'presentStory/showSub':
      return {
        ...state,
        subStory: true,
        subStoryList: true,
        subStoryListButtonFlex: true,
        subStoryButton: true,
        subStoryPrompt: false,
      };
    case 'showSubStories/onShowSubStories':
      return {
        ...state,
        subStoryListZone: true,
        subStorySubList: true,
        subStoryList: false,
        subStoryListButtonFlex: false,
        subStoryRenderZone: false,
      };
    case 'showSubForm/onShowSubForm':
      return {
        ...state,
        subStoryForm: true,
        subStoryButton: false,
      };
    case 'subStoryList/onSubStoryListItemClick':
      return {
        ...state,
        subStoryRenderZone: true,
        subStorySubList: false,
      };
    case 'goBack/onGoBack':
      return {
        ...state,
        subStorySubList: true,
        subStoryRenderZone: false,
      };
    case 'mapzone/handleLocationClick':
      return {
        ...state,
        storySubmissionPrompt: true,
        absentStoryRender: true,
        storyFormZone: false,
        presentStoryRender: false,
        subStoryList: false,
        subStoryListButtonFlex: false,
      };
    case 'mapzone/handleLegendGet':
      return {
        ...state,
        currentStory: 'FILL IN', // res.data[0],
        presentStoryRender: true,
        subStoryPrompt: true,
        absentStoryRender: false,
        subStory: false,
        subStoryForm: false,
        subStoryList: false,
        subStoryListZone: false,
        subStoryListButtonFlex: false,
        storyFormZone: false,
      };
    case 'StoryButtonClick/storyFormRender':
      return {
        ...state,
        storyFormZone: true,
        storySubmissionPrompt: false,
      };
    case 'TBA/showError':
      return {
        ...state,
        errorZone: true,
        errorMsg: payload,
      };
    case 'TBA/hideError':
      return {
        ...state,
        errorZone: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};

export default renderReducer;
