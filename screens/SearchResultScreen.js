import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./stylesLists";
import { SPOTS } from "../data/dummy-data";

const SearchResultScreen = props => {
  const renderFilteredSpots = itemData => {
    return (
      <View>
        <Text>{itemData.item.name}</Text>
      </View>
    );
  };

  const displayedSpots = SPOTS.filter();
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedSpots}
        keyExtractor={(item, index) => item.id}
        renderItem={renderFilteredSpots()}
      />
    </View>
  );
};

export default SearchResultScreen;
