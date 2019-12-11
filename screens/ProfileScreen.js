import React from "react";
import { Text, View } from "react-native";
import styles from "./stylesProfile";
import Colors from "../constants/Colors";

const ProfileScreen = props => {
  return (
    <View style={{ backgroundColor: Colors.bColor, flex: 1 }}>
      <Text>Add some of your favorite must-go-to spots!</Text>
    </View>
  );
};

export default ProfileScreen;
