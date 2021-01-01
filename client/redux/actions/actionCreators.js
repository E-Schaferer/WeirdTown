const closeErrorAction = () => ({
  type: 'ErrorModal/hideError',
  payload: '',
});

const showErrorAction = (text) => ({
  type: 'ErrorModal/showError',
  payload: text,
});

const storyFormRenderAction = () => ({
  type: 'StoryButtonClick/storyFormRender',
  payload: '',
});

const startingCitySubmitAction = (result) => ({
  type: 'cityButtonPress/handleStartingCitySubmit',
  payload: {
    lat: result.data.lat,
    long: result.data.lng,
  },
});

const legendGetAction = (res) => ({
  type: 'mapzone/handleLegendGet',
  payload: res.data[0],
});

const locationClickAction = (coords) => ({
  type: 'mapzone/handleLocationClick',
  payload: coords,
});

const showSubFormAction = () => ({
  type: 'showSubForm/onShowSubForm',
  payload: '',
});

const showSubAction = (result) => ({
  type: 'showSubStories/showSub',
  payload: {
    subNum: result.data.length,
    subs: result.data,
  },
});

const goBackAction = () => ({
  type: 'goBack/onGoBack',
  payload: '',
});

const substoryListClickAction = (result) => ({
  type: 'subStoryListItem/handleListClick',
  payload: result.data[0],
});

const substorySortAction = (output) => ({
  type: 'SubstorySort/sort',
  payload: output,
});

const subLikeAction = () => ({
  type: 'subStoryLike/like',
  payload: 1,
});

const subDislikeAction = () => ({
  type: 'subStoryDislike/dislike',
  payload: 1,
});

module.exports = {
  closeErrorAction,
  showErrorAction,
  storyFormRenderAction,
  startingCitySubmitAction,
  legendGetAction,
  locationClickAction,
  showSubFormAction,
  showSubAction,
  goBackAction,
  substoryListClickAction,
  substorySortAction,
  subLikeAction,
  subDislikeAction,
};
