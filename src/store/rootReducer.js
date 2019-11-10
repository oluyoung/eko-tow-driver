import { combineReducers } from 'redux';
// import authReducer from './reducers/authReducer';
import homeReducer from './reducers/home.reducer';
import towBookingsReducer from './reducers/towBookings.reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  // auth: authReducer,
  towBookings: towBookingsReducer
});

export default rootReducer;
