import { updateObject } from '../utility';

const handleGetCurrentLocation = (state, action) => {
  const location = {
    name: 'Current Location',
    latitude: action.position.latitude,
    longitude: action.position.longitude
  };
  if (action.isPickup) {
    return updateObject(state, {
      pickupLocation: updateObject(state.pickupLocation, {
        ...location
      })
    });
  }
  return updateObject(state, {
    dropoffLocation: updateObject(state.dropoffLocation, {
      ...location
    })
  });
};

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
};

export default ACTION_HANDLERS;
