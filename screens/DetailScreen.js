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
import Detail from "../components/Detail";

import styles from "./stylesDetail";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, detailsSpot } from "../store/actions/spots";

const DetailScreen = props => {
  let TouchableURLComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableURLComponent = TouchableNativeFeedback;
  }

  const availableSpots = useSelector(state => state.spots.spots); //state beschikbaar maken
  const spotId = props.navigation.getParam("spotId"); //spotid ophalen
  const selectedSpot = availableSpots.find(spot => spot.id === spotId); //of  id matches

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsSpot(selectedSpot.id));
  }, [dispatch]);

  const passedSpot = useSelector(state => state.spots.detailsSpot);

  //console.log(passedSpot);

  //FUNCTIONS FOR FAVORITING
  // const currentSpotFavorite = useSelector(state =>
  //   state.spots.favoriteSpots.some(spot => spot.id === spotId)
  // ); //check if spot.id is in favoriteSpots array available

  // const toggleFavoriteHandler = useCallback(() => {
  //   dispatch(toggleFavorite(spotId));
  // }, [dispatch, spotId]); //useCallback to break infinite loop

  // useEffect(() => {
  //   props.navigation.setParams({ setFavorite: toggleFavoriteHandler });
  // }, [toggleFavoriteHandler]);

  // useEffect(() => {
  //   props.navigation.setParams({ isFavoriteOrNot: currentSpotFavorite });
  // }, [currentSpotFavorite]);

  // openWebBrowser = async url => {
  //   await WebBrowser.openBrowserAsync("https://" + url);
  // };

  return <Detail data={passedSpot} />;
};

DetailScreen.navigationOptions = navigationData => {
  const spotName = navigationData.navigation.getParam("spotName");
  // const toggleFavorite = navigationData.navigation.getParam("setFavorite");
  // const isFavorite = navigationData.navigation.getParam("isFavoriteOrNot");

  return {
    headerTitle: spotName
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Bookmark"
    //       MyIconComponent={MaterialIcons}
    //       iconName={isFavorite ? "bookmark" : "bookmark-border"}
    //       onPress={toggleFavorite}
    //     />
    //   </HeaderButtons>
    // )
  };
};

export default DetailScreen;
