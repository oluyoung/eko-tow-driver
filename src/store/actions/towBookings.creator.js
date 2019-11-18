import * as actionType from './actions';
import axiosBackend from '../../axios-backend';

// comes on when user is online
const startTowRequestListeners = () => {
  const socket = io(SOCKET_URL, SOCKET_CONFIG);
  return (dispatch, store) => {

    // Listen For New Tow Request
    socket.on('towRequest', (data) => {
      console.log('towRequest', data);
      if (data.nearbyDrivers.includes(store().auth.currentUser.id)) {
        console.log('newTowRequest', data);
        dispatch({
          type: actionType.ADD_TOW_REQUEST,
          towBooking: data.towBooking
        });
      }
    });

    // Listen For Already Accepted Tow Requests
    socket.on('towBookingUnavailable', (data) => {
      console.log('towRequest', data);
      const towBooking = store().towBookings.towRequests.find(request => {
        return request._id === data.towBookingId
      });
      if (towBooking) {
        dispatch({
          type: actionType.REMOVE_TOW_REQUEST,
          towBookingId: data.towBookingId
        });
      }
    });
  };
}

const acceptTowRequest = (towBookingId) => {
  return (dispatch, store) => {
    const reqObj = {
      driverId: store().auth.currentUser.id,
      towBookingId
    };
    axiosBackend.post('/towBookings/setAcceptedDriver', reqObj)
      .then(res => {
        if (res.data.success) {
          
        }
      })
      .catch(error => console.log("setAcceptedDriver ERROR", error));
  }
};

const getTowBookings = () => {
  return (dispatch, store) => {
    axiosBackend.get(`/tows/driver/${store().auth.currentUser.id}`).then(response => {
      if (response.data.count > 0) {
        dispatch({
          type: actionType.GET_TOW_BOOKINGS,
          towBookings: response.data.towBookings
        });
      }
    }).catch(error => {
      console.log('ERROR: getTowBookings', error);
    });
  };
};


export {
  startTowRequestListeners,
  acceptTowRequest,
  getTowBookings
};