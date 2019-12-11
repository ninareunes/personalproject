import React, { useEffect } from "react";
import {
  View,
  Platform,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  FlatList
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpots } from "../store/actions/spots";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import styles from "./stylesHome";

import HeaderButton from "../components/HeaderButton";
import SpotList from "../components/SpotList";

const HomeScreen = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const spots = useSelector(state => state.spots.spots); //slice of state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  // const displayedSpots = spots.filter(spot => spot.name != " ");

  // if (spots.length === 0) {
  //   <View>
  //     <Text>No spots founded, maybe less specify your filters!</Text>
  //   </View>;
  // }

  return (
    <View>
      <View style={styles.filter}>
        <TouchableCmp
          onPress={() => props.navigation.navigate({ routeName: "Filter" })}
        >
          <View style={styles.filterBtn}>
            <Icon name="filter" size={25} color="#979797" />
            <Text style={styles.filterText}>Filter</Text>
          </View>
        </TouchableCmp>
      </View>

      <SpotList listData={spots} navigation={props.navigation} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Neighbourhood",
  headerTitleStyle: {
    textAlign: "center",
    flex: 1
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
