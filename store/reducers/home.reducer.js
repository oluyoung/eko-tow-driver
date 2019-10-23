import ACTION_HANDLERS from '../handlers/homeHandler';

const deltas = {
  latitudeDelta: 0.0,
  longitudeDelta: 0.0
};

export const initState = {
  currentLocation: {
    ...deltas
  }
};

const homeReducer = (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default homeReducer;
