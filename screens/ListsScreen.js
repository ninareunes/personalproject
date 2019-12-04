import React from "react";
import SpotList from "../components/SpotList";
import styles from "./stylesLists";
import { SPOTS } from "../data/dummy-data";

const ListsScreen = props => {
  const favSpots = SPOTS.filter(spot => spot.name != "");
  return <SpotList listData={favSpots} navigation={props.navigation} />;
};

export default ListsScreen;
