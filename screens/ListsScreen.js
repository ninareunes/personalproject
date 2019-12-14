import React, { useEffect } from "react";
import SpotList from "../components/SpotList";
import Colors from "../constants/Colors";

import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites } from "../store/actions/spots";
import styles from "./stylesLists";

const ListsScreen = props => {
  const dispatch = useDispatch();
  const favSpots = useSelector(state => state.spots.favoriteSpots);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (favSpots.length === 0 || !favSpots) {
    return (
      <View
        style={{ ...styles.container, backgroundColor: Colors.bColor, flex: 1 }}
      >
        <Text style={styles.replaceText}>
          Add some of your favorite must-go-to spots!
        </Text>
      </View>
    );
  }

  return <SpotList listData={favSpots} navigation={props.navigation} />;
};

export default ListsScreen;
