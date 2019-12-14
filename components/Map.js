import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import styles from "./stylesMap";
import MapView from "react-native-maps";
import Colors from "../constants/Colors";

const Map = props => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.421
  };

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onPress} style={styles.container}>
      <MapView region={mapRegion} style={styles.map} />
    </TouchableCmp>
  );
};

export default Map;
