import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentLocationButton from './CurrentLocationButton/CurrentLocationButton';
import MapContainer from './MapContainer/MapContainer';
import TowBookingRequestsThumb from './TowBookingRequestsThumb';
import Aux from '../Aux';

class HomeContainer extends Component {

  // <CurrentLocationButton callback={this.centerToUserLocation} bottom={locationBottom} />

  render() {
    const pickupLocation = this.props.currentTowBooking ? this.props.currentTowBooking.pickupLocation : null;
    return (
      <Aux>
        <MapContainer pickupRegion={pickupLocation} />
        <TowBookingRequestsThumb />
        <CurrentLocationButton />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTowBooking: state.towBookings.currentTowBooking,
    currentLocation: state.home.currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
