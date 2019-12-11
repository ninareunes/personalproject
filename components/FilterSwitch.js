import React from "react";
import { Platform, View, Text, Switch } from "react-native";
import Colors from "../constants/Colors";
import styles from "../screens/stylesFilter";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FilterSwitch = props => {
  return (
    <View style={styles.switch}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.moreText}>{props.label}</Text>
        <Icon size={25} color="black" name={props.name} />
      </View>
      <Switch
        trackColor={{ true: Colors.accent }}
        thumbColor={Platform.OS === "android" ? "white" : ""}
        value={props.state}
        onValueChange={props.onChange}
        extraData={props.state}
      />
    </View>
  );
};

export default FilterSwitch;
