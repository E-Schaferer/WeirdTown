const initialState = {
  currentStory: {
    id: 'REDACTED', // look into this, seems to actually be id?
    latitude: 'REDACTED',
    likes: 'REDACTED',
    longitude: 'REDACTED',
    story: 'REDACTED',
    storylocation: 'REDACTED',
    storyname: 'REDACTED',
    thingsseen: 'REDACTED',
    thingsheard: 'REDACTED',
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
    case ('showSubStories/showSub'):
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
    case ('subStoryListItem/handleListClick'):
      return {
        ...state,
        subStory: payload,
      };
    case ('SubstorySort/sort'):
      return {
        ...state,
        subs: payload,
      };
    default:
      return state;
  }
};

export default storyReducer;
