import React from "react";
import { Text, View, TouchableOpacity, Button, FlatList } from "react-native";
import { SPOTS } from "../data/dummy-data";
import styles from "./stylesRecItem";

const HomeRec = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({ routeName: "Detail" });
        }}
      >
        <View style={styles.item}>
          <Text>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={SPOTS}
      renderItem={renderGridItem}
    />
  );
};

export default HomeRec;
