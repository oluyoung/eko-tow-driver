import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';

import styles from './styles'

// get requests an add to number
// use image for thumbnail
const TowBookingRequestsThumb = (props) => (
  <TouchableOpacity style={styles.touchableWrap}>
    <Thumbnail small source={{uri: 'https://news.nd.edu/assets/217645/600x/maurizio_albahari.jpg'}} />
    <Text style={styles.number}>4</Text>
  </TouchableOpacity>
);

export default TowBookingRequestsThumb;