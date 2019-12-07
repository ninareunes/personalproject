import React from "react";
import SpotList from "../components/SpotList";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";

const ListsScreen = props => {
  const favSpots = useSelector(state => state.spots.favoriteSpots);

  if (favSpots.length === 0 || !favSpots) {
    return (
      <View>
        <Text>Add some of your favorite must-go-to spots!</Text>
      </View>
    );
  }

  return <SpotList listData={favSpots} navigation={props.navigation} />;
};

export default ListsScreen;
