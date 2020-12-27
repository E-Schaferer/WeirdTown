const initialState = {
  citySelected: false, // keeps track of if the user has declared their current location
  cityLocationInput: '', // city selection text input
  lastMarker: undefined,
  lat: 47.5707, // starting latitude position for the map
  long: -122.2221, // starting longitude position for the map
  zoom: 15,
  // lastMarker: undefined, (duplicate)
  coords: [],
};

const mapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'cityButtonPress/handleStartingCitySubmit':
      return {
        ...state,
        lat: payload.lat,
        long: payload.long,
        citySelected: true,
      };
    case 'mapzone/handleLocationClick':
      return {
        ...state,
        lastMarker: 'thing',
      };
    default:
      return state;
  }
};

export default mapReducer;
