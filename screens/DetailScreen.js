import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Detail from "../components/Detail";

import { Colors } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import {
  toggleFavorite,
  detailsSpot,
  deleteFavorite
} from "../store/actions/spots";

const DetailScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const availableSpots = useSelector(state => state.spots.spots); //state beschikbaar maken
  const spotId = props.navigation.getParam("spotId"); //spotid ophalen
  const selectedSpot = availableSpots.find(spot => spot.id === spotId); //of  id matches

  const dispatch = useDispatch();

  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true);
      await dispatch(detailsSpot(selectedSpot.id));
      setIsLoading(false);
    };
    loadDetails();
  }, [dispatch]);

  const passedSpot = useSelector(state => state.spots.detailsSpot);

  let currentSpotFavorite = useSelector(state =>
    state.spots.favoriteSpots.some(spot => spot.id === spotId)
  ); //check if spot.id is in favoriteSpots array available
  console.log(currentSpotFavorite);

  //add favorite

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(spotId));
  }, [dispatch, spotId]); //useCallback to break infinite loop

  useEffect(() => {
    props.navigation.setParams({ setFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]); //setFavorite = add or delete as favorite

  //delete favorite

  const deleteFavoriteHandler = useCallback(() => {
    dispatch(deleteFavorite(spotId));
  }, [dispatch, spotId]);

  useEffect(() => {
    props.navigation.setParams({ unsetFavorite: deleteFavoriteHandler });
  }, [deleteFavoriteHandler]);

  //functie voor icon

  useEffect(() => {
    props.navigation.setParams({ isFavoriteOrNot: currentSpotFavorite });
  }, [currentSpotFavorite]); //to know for icon

  openWebBrowser = async url => {
    await WebBrowser.openBrowserAsync("https://" + url);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.bColor
        }}
      >
        <ActivityIndicator size="large" color={Colors.accent} />
      </View>
    );
  }

  return <Detail data={passedSpot} />;
};

DetailScreen.navigationOptions = navigationData => {
  const spotName = navigationData.navigation.getParam("spotName");
  const toggleFavorite = navigationData.navigation.getParam("setFavorite");
  const deleteFavorite = navigationData.navigation.getParam("unsetFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavoriteOrNot");

  return {
    headerTitle: spotName,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Bookmark"
          MyIconComponent={MaterialIcons}
          iconName={isFavorite ? "bookmark" : "bookmark-border"}
          onPress={isFavorite ? deleteFavorite : toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

export default DetailScreen;
