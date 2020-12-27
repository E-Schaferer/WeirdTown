import { combineReducers } from 'redux';
import storyReducer from './nonRootReducers/story.reducer';
import mapReducer from './nonRootReducers/map.reducer';
import renderReducer from './nonRootReducers/render.reducer';

const rootReducer = combineReducers({
  storyReducer,
  mapReducer,
  renderReducer,
});

export default rootReducer;
