import React from "react";
import {
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback,
  View
} from "react-native";
import styles from "./stylesCheckbox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Checkbox = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp
      onPress={props.onPress}
      value={props.state}
      onValueChange={props.onChange}
      checked={props.state}
    >
      <View style={styles.itemsrow}>
        <Icon size={25} color="black" name={props.name} />
        <Text style={styles.momentText}> {props.label} </Text>
      </View>
    </TouchableCmp>
  );
};

export default Checkbox;
