import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentLocationButton from './CurrentLocationButton/CurrentLocationButton';
import MapContainer from './MapContainer/MapContainer';
import Aux from '../Aux';

import { requestDrivers } from '../../store/actions';

class HomeContainer extends Component {

  render() {
    let locationBottom = null;
    const isRouteInfoCalculated = this.props.routeInfo.duration.value && this.props.routeInfo.distance.value;
    if (isRouteInfoCalculated) {
      locationBottom = 300;
    }

    return (
      <Aux>
        <MapContainer pickupRegion={this.props.pickupLocation} />
        <CurrentLocationButton callback={this.centerToUserLocation} bottom={locationBottom} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    pickupLocation: state.towBooking.pickupLocation,
    dropoffLocation: state.towBooking.dropoffLocation,
    routeInfo: state.towBooking.routeInfo,
    fare: state.towBooking.fare,
    carType: state.towBooking.carType,
    towTruckType: state.towBooking.towTruckType,
    currentLocation: state.home.currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDrivers: () => dispatch(requestDrivers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
