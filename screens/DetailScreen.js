import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import styles from "./stylesDetail";

import { SPOTS } from "../data/dummy-data";

const DetailScreen = props => {
  let TouchableURLComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableURLComponent = TouchableNativeFeedback;
  }

  const spotId = props.navigation.getParam("spotId");
  const selectedSpot = SPOTS.find(spot => spot.id === spotId);

  const capitalCategory =
    selectedSpot.category.charAt(0).toUpperCase() +
    selectedSpot.category.slice(1);
  const capitalCity =
    selectedSpot.city.charAt(0).toUpperCase() + selectedSpot.city.slice(1);
  const capitalAddress =
    selectedSpot.address.charAt(0).toUpperCase() +
    selectedSpot.address.slice(1);

  openWebBrowser = async url => {
    await WebBrowser.openBrowserAsync("https://" + url);
  };

  return (
    <ScrollView>
      <View style={styles.imageView}>
        <Image source={selectedSpot.img} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.itemRowSP}>
          <Text style={styles.itemName}>{selectedSpot.name}</Text>
          <Text style={styles.itemRating}>{selectedSpot.rating}/5</Text>
        </View>

        <View style={styles.itemStyle}>
          <Text style={styles.category}>{capitalCategory}</Text>
          <Text style={styles.seperator}>|</Text>

          <Text style={styles.price}>{selectedSpot.price}</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.itemAddress}>
            {capitalAddress}, {capitalCity}
          </Text>
        </View>

        <View>
          <TouchableURLComponent>
            <Text
              style={styles.url}
              onPress={() => openWebBrowser(selectedSpot.url)}
            >
              {selectedSpot.url}
            </Text>
          </TouchableURLComponent>
        </View>
      </View>
    </ScrollView>
  );
};

DetailScreen.navigationOptions = navigationData => {
  const spotId = navigationData.navigation.getParam("spotId");

  const selectedSpot = SPOTS.find(spot => spot.id === spotId);

  return {
    headerTitle: selectedSpot.name,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Bookmark"
          MyIconComponent={MaterialIcons}
          iconName="bookmark-border"
          onPress={() => {
            console.log("Bookmarked");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default DetailScreen;
