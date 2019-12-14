import React from "react";
import { Text, View } from "react-native";
import styles from "./stylesBigMap";
import Colors from "../constants/Colors";
import MapView, { Marker } from "react-native-maps";

const BigMapScreen = props => {
  const mapRegion = {
    latitude: 51.041153,
    longitude: 3.726433,
    latitudeDelta: 0.0099,
    longitudeDelta: 0.0099
  };

  let myCurrentLocation = { latitude: 51.041153, longitude: 3.726433 };

  return (
    <View style={styles.mapContainer}>
      <MapView region={mapRegion} style={styles.map}>
        <Marker coordinate={myCurrentLocation} pinColor={Colors.accent} />
      </MapView>
    </View>
  );
};

export default BigMapScreen;
