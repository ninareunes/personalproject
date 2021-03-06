import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Image
} from "react-native";
import styles from "./stylesTileItem";
import Colors from "../constants/Colors";

const HomeTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.item}>
      <TouchableComponent style={styles.rippleItem} onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: "white" }
          }}
        >
          <View style={styles.itemImage}>
            <Image
              source={{ uri: `${props.img}` }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 90 / 2,
                backgroundColor: Colors.accent
              }}
              onPress={() => {}}
            />
          </View>
          <View style={styles.itemText}>
            <View style={styles.NameRating}>
              <Text style={styles.itemTitle}>{props.name}</Text>
            </View>
            <Text style={styles.itemDesc} numberOfLines={1}>
              {props.address}, {props.city}
            </Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default HomeTile;
