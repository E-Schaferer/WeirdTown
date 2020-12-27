const initialState = {
  // absentStoryRender: false, // AbsentStory
  // storySubmissionPrompt: false, // submission-prompt
  // storyFormZone: false, // story-form-zone
  // presentStoryRender: false, // PresentStory
  // subStoryPrompt: false, // substory-prompt
  // subStory: false, // substory
  // subStoryList: false, // substory-list
  // showSubStoriesButton: false, // substory-list-button-flex-zone :prev subStoryListButtonFlex
  // subStoryListZone: false, // substory-list-zone
  // subStoryButton: false, // sub-story-button
  // subStoryForm: false, // sub-story-form
  // subStorySubParent: false, // substory-sub-list
  // subStoryRenderParent: false, // substory-render-zone
  mapZoneRender: false, // mapzone
  cityLocationInputRender: true, // citySelection
  presentStoryRender: false, // presentStory
  subStoryPrime: false, // substory
  showSubStoriesButton: false, // showsubstories
  subStoryListParent: false, // substorylist
  subStoryRenderParent: false, // substorylist
  subStoryFormButton: false, // showsubform
  subStoryFormRender: false, // substoryform
  storyFormButton: false, // storybuttonclick
  storyFormRender: false, // storyform
  errorZone: false,
  errorMsg: '',
};

const renderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'presentStory/showSub':
      return {
        ...state,
      };
    case 'showSubStories/onShowSubStories':
      return {
        ...state,
      };
    case 'showSubForm/onShowSubForm':
      return {
        ...state,
      };
    case 'subStoryList/onSubStoryListItemClick':
      return {
        ...state,
      };
    case 'goBack/onGoBack':
      return {
        ...state,
      };
    case 'mapzone/handleLocationClick':
      return {
        ...state,
      };
    case 'mapzone/handleLegendGet':
      return {
        ...state,
        currentStory: 'FILL IN', // res.data[0],
      };
    case 'StoryButtonClick/storyFormRender':
      return {
        ...state,
      };
    case 'cityButtonPress/handleStartingCitySubmit':
      return {
        ...state,
        mapZoneRender: true,
        cityLocationInputRender: false,
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
