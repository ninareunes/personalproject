import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./stylesDetail";

import { SPOTS } from "../data/dummy-data";

const DetailScreen = props => {
  const spotId = props.navigation.getParam("spotId");

  const selectedSpot = SPOTS.find(spot => spot.id === spotId);
  return (
    <View style={styles.container}>
      <Text>{selectedSpot.name}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = navigationData => {
  const spotId = navigationData.navigation.getParam("spotId");

  const selectedSpot = SPOTS.find(spot => spot.id === spotId);

  return {
    headerTitle: selectedSpot.name
  };
};

export default DetailScreen;
