import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import HomeTile from "../components/HomeTile";
import { useSelector } from "react-redux";

const SpotList = props => {
  const favoriteSpots = useSelector(state => state.spots.favoriteSpots);

  const renderGridItem = itemData => {
    const isFavorite = favoriteSpots.some(spot => spot.id === itemData.item.id);
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
              spotId: itemData.item.id,
              spotName: itemData.item.name,
              isFavoriteOrNot: isFavorite
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.listData}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({});

export default SpotList;
