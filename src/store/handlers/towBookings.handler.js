import { updateObject } from '../utility';

const handlePushToTowRequests = (state, action) => {
  return updateObject(state, {
    towRequests: state.towRequests.concat(action.towBooking)
  });
};

const handleGetCurrentTowBooking = (state, action) => {
  return updateObject(state, {
    currentTowBooking: action.towBooking
  });
};

const ACTION_HANDLERS = {
  PUSH_TO_TOW_REQUESTS: handlePushToTowRequests,
  GET_CURRENT_TOW_BOOKING: handleGetCurrentTowBooking
};

export default ACTION_HANDLERS;