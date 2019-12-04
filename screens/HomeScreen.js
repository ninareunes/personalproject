import React from "react";
import { FlatList, View } from "react-native";
import { SPOTS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

// import SearchSvg from "../components/SearchSvg";
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
  headerTitle: "Neighbourhood",
  headerTitleStyle: {
    textAlign: "center",
    flex: 1
    // marginRight: 90
  },
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Bookmark"
        MyIconComponent={MaterialIcons}
        iconName="bookmark-border"
        onPress={() => {
          console.log("Boormarked!");
        }}
      />
    </HeaderButtons>
  ),
  headerRight: <View style={{ padding: 6 }}></View>
};

export default HomeScreen;
