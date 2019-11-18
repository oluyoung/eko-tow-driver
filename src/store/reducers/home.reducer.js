import ACTION_HANDLERS from '../handlers/home.handler';

const deltas = {
  latitudeDelta: 0.0,
  longitudeDelta: 0.0
};

export const initState = {
  currentLocation: {
    ...deltas,
    latitude: 6.557716,
    longitude: 3.384178
  },
  isOnline: false
};

const homeReducer = (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default homeReducer;
