import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import styles from "./stylesDetail";

import { SPOTS } from "../data/dummy-data";

const DetailScreen = props => {
  const spotId = props.navigation.getParam("spotId");

  const selectedSpot = SPOTS.find(spot => spot.id === spotId);
  return (
    <View style={styles.container}>
      <Text>{selectedSpot.name}</Text>
      <Text>{selectedSpot.rating}</Text>
      <Text>{selectedSpot.desc}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = navigationData => {
  const spotId = navigationData.navigation.getParam("spotId");

  const selectedSpot = SPOTS.find(spot => spot.id === spotId);

  return {
    headerTitle: selectedSpot.name,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default DetailScreen;
