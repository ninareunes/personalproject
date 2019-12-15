import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import styles from "./stylesBigMap";
import Colors from "../constants/Colors";
import MapView, { Marker, Callout } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import MarkerSpot from "../models/marker";

const BigMapScreen = props => {
  const spots = useSelector(state => state.spots.spots); //slice of state
  const dispatch = useDispatch();

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  let coordinates = [];

  spots.map(spot => {
    coordinates.push(
      new MarkerSpot(spot.lat, spot.long, spot.id, spot.name, spot.img)
    );
  });

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
        {coordinates.map(coordinate => (
          <Marker
            onLoad={() => forceUpdate()}
            key={coordinate.id}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude
            }}
            pinColor={Colors.sndAccent}
          >
            <Callout tooltip={true} onLoad={() => forceUpdate()}>
              <View style={styles.calloutItem}>
                <TouchableCmp style={styles.rippleItem}>
                  <View style={styles.calloutContainer}>
                    <View style={styles.calloutViewImage}>
                      <Text style={styles.calloutViewImage}>
                        <Image
                          style={styles.calloutImage}
                          source={{ uri: `${coordinate.img}` }}
                        />
                      </Text>
                    </View>

                    <View style={styles.calloutCTText}>
                      <Text style={styles.calloutText}>{coordinate.name}</Text>
                    </View>
                  </View>
                </TouchableCmp>
              </View>
            </Callout>
          </Marker>
        ))}

        <Marker
          coordinate={myCurrentLocation}
          pinColor={Colors.accent}
          title="Your location"
        />
      </MapView>
    </View>
  );
};

export default BigMapScreen;
