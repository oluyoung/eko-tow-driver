import ACTION_HANDLERS from '../handlers/towBookingsHandler';

export const initState = {
  currentTowBooking: null,
  requestedTows: [],
  driversTows: [],
  towRequests: []
};

const towBookingsReducer = (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default towBookingsReducer;
