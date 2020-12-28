const initialState = {
  // present story state
  presentStoryRender: false, // presentStory
  subStoryPrime: false, // substory
  showSubStoriesButton: false, // showsubstories
  subStoryListParent: false, // substorylist
  subStoryRenderParent: false, // substorylist
  subStoryFormButton: false, // showsubform
  subStoryFormRender: false, // substoryform

  // absent story state
  absentStoryPrime: false, // absentstory
  storyFormButton: false, // storybuttonclick
  storyFormRender: false, // storyform

  // other state
  cityLocationInputRender: true, // citySelection
  mapZoneRender: false, // mapzone
  errorZone: false,
  errorMsg: '',
};

const renderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'showSubStories/showSub':
      return {
        ...state,
        showSubStoriesButton: false,
        subStoryListParent: true,
        subStoryFormButton: true,
      };
    case 'showSubForm/onShowSubForm':
      return {
        ...state,
        subStoryFormButton: false,
        subStoryListParent: false,
        subStoryFormRender: true,
      };
    case 'subStoryListItem/handleListClick':
      return {
        ...state,
        subStoryRenderParent: true,
        subStoryListParent: false,
      };
    case 'goBack/onGoBack':
      return {
        ...state,
        subStoryRenderParent: false,
        subStoryListParent: true,
      };
    case 'mapzone/handleLocationClick':
      return {
        ...state,
        absentStoryPrime: true,
        storyFormButton: true,
        storyFormRender: false,
        presentStoryRender: false,
        subStoryPrime: false,
        showSubStoriesButton: false,
        subStoryListParent: false,
        subStoryRenderParent: false,
        subStoryFormButton: false,
        subStoryFormRender: false,
      };
    case 'mapzone/handleLegendGet':
      return {
        ...state,
        absentStoryPrime: false,
        storyFormButton: false,
        storyFormRender: false,
        presentStoryRender: true,
        subStoryPrime: true,
        showSubStoriesButton: true,
        subStoryListParent: false,
        subStoryRenderParent: false,
        subStoryFormButton: false,
        subStoryFormRender: false,
      };
    case 'StoryButtonClick/storyFormRender':
      return {
        ...state,
        storyFormButton: false,
        storyFormRender: true,
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
