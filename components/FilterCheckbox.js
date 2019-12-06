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
import IonIcon from "react-native-vector-icons/Ionicons";

const Checkbox = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp style={styles.momentsitems} onPress={props.onPress}>
      <View style={styles.itemsrow}>
        <Icon size={25} color="black" name={props.name} />
        <Text style={styles.momentText}> {props.label} </Text>
      </View>
    </TouchableCmp>
  );
};

export default Checkbox;
