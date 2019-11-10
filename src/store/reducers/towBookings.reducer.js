import ACTION_HANDLERS from '../handlers/towBookings.handler';

export const initState = {
  currentTowBooking: null, // show in tab: current
  // requestedTows: [], // what the hell is this?
  myTows: [], // show in tab: completed
  towRequests: [] // show in tab: requests
};

const towBookingsReducer = (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default towBookingsReducer;
