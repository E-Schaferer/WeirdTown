const initialState = {
  currentStory: {
    storyId: 'REDACTED',
    story: 'REDACTED',
    storyLocation: 'REDACTED',
    storyName: 'REDACTED',
    thingsSeen: 'REDACTED',
    thingsHeard: 'REDACTED',
  },
  subNum: 0,
  subs: [],
  subStory: {
    id: 0,
    storyid: 0,
    sublocation: 'REDACTED',
    subheard: 'REDACTED',
    subseen: 'REDACTED',
    subname: 'REDACTED',
    substory: 'REDACTED',
    sublikes: 0,
  },
};

const storyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ('presentStory/showSub'):
      return {
        ...state,
        subNum: payload.subNum,
        subs: payload.subs,
      };
    case ('mapzone/handleLegendGet'):
      return {
        ...state,
        currentStory: payload,
      };
    case ('subStoryList/handleListClick'):
      return {
        ...state,
        subStory: payload,
      };
    case ('subStorySort/sort'):
      return {
        ...state,
        subs: payload,
      };
    default:
      return state;
  }
};

export default storyReducer;
