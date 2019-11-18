import { updateObject } from '../utility';

const handleAddTowRequest = (state, action) => {
  const request = state.towRequests.find(request => {
    return request._id === action.towBooking._id;
  });
  if (!request) {
    return updateObject(state, {
      towRequests: state.towRequests.concat(action.towBooking)
    });
  }
  return state;
};

const handleRemoveTowRequest = (state, action) => {
  const idx = state.towRequests.findIndex(request => {
    return request._id === action.towBookingId;
  });
  if (idx) {
    return updateObject(state, {
      towRequests: state.towRequests.splice(idx, 1)
    });
  }
  return state;
};

const handleGetCurrentTowBooking = (state, action) => {
  return updateObject(state, {
    currentTowBooking: action.towBooking
  });
};

const ACTION_HANDLERS = {
  ADD_TOW_REQUEST: handleAddTowRequest,
  REMOVE_TOW_REQUEST: handleRemoveTowRequest,
  GET_CURRENT_TOW_BOOKING: handleGetCurrentTowBooking
};

export default ACTION_HANDLERS;