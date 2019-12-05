import React from "react";
import { View, Button } from "react-native";
import { SPOTS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./stylesHome";

import HeaderButton from "../components/HeaderButton";
import SpotList from "../components/SpotList";

const HomeScreen = props => {
  return (
    <View>
      <View style={styles.filter}>
        <Button
          style={styles.filterBtn}
          name="filter"
          title="Filter"
          onPress={() => props.navigation.navigate({ routeName: "Filter" })}
          leftIcon={{ type: "font-awesome", name: "filter" }}
        />
      </View>

      <SpotList listData={SPOTS} navigation={props.navigation} />
    </View>
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
        title="Search"
        MyIconComponent={Ionicons}
        iconName="ios-search"
        onPress={() => {
          console.log("Search!");
        }}
      />
    </HeaderButtons>
  ),
  headerRight: <View style={{ padding: 6 }}></View>
};

export default HomeScreen;
