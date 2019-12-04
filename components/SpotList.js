import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import HomeTile from "../components/HomeTile";
import { SPOTS } from "../data/dummy-data";

const SpotList = props => {
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
      data={props.listData}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({});

export default SpotList;
