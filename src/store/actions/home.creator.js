import Geolocation from 'react-native-geolocation-service';
import io from 'socket.io-client/dist/socket.io';

import * as actionType from './actions';
import axiosBackend from '../../axios-backend';
import { file } from '@babel/types';

const SOCKET_URL = 'http://localhost:5000/';
const SOCKET_CONFIG = {
  timeout: 10000,
  jsonp: false,
  transports: ['websocket'],
  autoConnect: true
};

function getCurrentLocation(isPickup) {
  return (dispatch, store) => {
    Geolocation.getCurrentPosition(position => {
      dispatch({
        type: actionType.GET_CURRENT_LOCATION,
        isPickup,
        position: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }, error => {
      console.log("GET CURRENT LOCATION ERROR", error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000
    });
  };
}

function getTowRequest() {
  return (dispatch, store) => {
    socket.on('towRequest', (data) => {
      console.log('towRequest', data);
      if (data.nearbyDrivers.includes(store().auth.currentUser.id)) {
        console.log('driverAcceptedRequestListen', data);
        dispatch({
          type: actionType.PUSH_TO_TOW_REQUESTS,
          towBooking: data.towBooking
        });
      }
      // if data: setAcceptedDriver
      // dispatch-setAcceptedDriver
    });
  };
}

export {
  getCurrentLocation,
  getTowRequest
};