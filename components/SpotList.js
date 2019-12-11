import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import HomeTile from "../components/HomeTile";
import { useSelector } from "react-redux";

const SpotList = props => {
  const favoriteSpots = useSelector(state => state.spots.favoriteSpots);

  const renderGridItem = itemData => {
    let isFavorite = false;
    if (favoriteSpots) {
      isFavorite = favoriteSpots.some(spot => spot.id === itemData.item.id);
    }

    return (
      <HomeTile
        name={itemData.item.name}
        desc={itemData.item.desc}
        img={itemData.item.img}
        rating={itemData.item.rating}
        style={{ width: "100%" }}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Detail",
            params: {
              spotId: itemData.item.id, //id meegeven
              spotName: itemData.item.name, //name meegeven voor in header
              isFavoriteOrNot: isFavorite
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={props.listData}
      renderItem={renderGridItem}
    />
  );
};

export default SpotList;
