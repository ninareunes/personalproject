import React from "react";
import { Text, View, TouchableOpacity, Button, FlatList } from "react-native";
import { SPOTS } from "../data/dummy-data";
import styles from "./stylesHome";
import SearchSvg from "../components/SearchSvg";
import HomeTile from "../components/HomeTile";

const HomeScreen = props => {
  const renderGridItem = itemData => {
    return (
      <HomeTile
        name={itemData.item.name}
        desc={itemData.item.desc}
        img={itemData.item.img}
        rating={itemData.item.rating}
        style={{ width: "100%" }}
        onSelect={() => {
          // console.log(itemData.item.img);
          props.navigation.navigate({
            routeName: "Detail",
            params: {
              spotId: itemData.item.id
            }
          });
        }}
      />
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

HomeScreen.navigationOptions = {
  headerTitle: "Neighbourhood"
};

export default HomeScreen;
