import React, { useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import styles from "./stylesDetail";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/spots";

const DetailScreen = props => {
  let TouchableURLComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableURLComponent = TouchableNativeFeedback;
  }

  const availableSpots = useSelector(state => state.spots.spots);
  const spotId = props.navigation.getParam("spotId");
  const currentSpotFavorite = useSelector(state =>
    state.spots.favoriteSpots.some(spot => spot.id === spotId)
  ); //id item is part or not of favorites array

  const selectedSpot = availableSpots.find(spot => spot.id === spotId);

  //favorite-ing
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(spotId));
  }, [dispatch, spotId]); //useCallback to break infinite loop

  useEffect(() => {
    props.navigation.setParams({ setFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavoriteOrNot: currentSpotFavorite });
  }, [currentSpotFavorite]);

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
  const spotName = navigationData.navigation.getParam("spotName");
  const toggleFavorite = navigationData.navigation.getParam("setFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavoriteOrNot");

  return {
    headerTitle: spotName,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Bookmark"
          MyIconComponent={MaterialIcons}
          iconName={isFavorite ? "bookmark" : "bookmark-border"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

export default DetailScreen;
