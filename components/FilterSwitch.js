import React from "react";
import { Platform, View, Text, Switch } from "react-native";
import Colors from "../constants/Colors";
import styles from "../screens/stylesFilter";

const FilterSwitch = props => {
  return (
    <View style={styles.switch}>
      <Text style={styles.moreText}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.accent }}
        thumbColor={Platform.OS === "android" ? "white" : ""}
        value={props.switchState}
        onValueChange={props.switchOnChange}
      />
    </View>
  );
};

export default FilterSwitch;
