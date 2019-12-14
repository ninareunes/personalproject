import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import styles from "../screens/stylesDetail";
import Colors from "../constants/Colors";

const Detail = props => {
  let TouchableURLComponent = TouchableOpacity;
  const dollars = ["$", "$$", "$$$", "$$$$"];

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableURLComponent = TouchableNativeFeedback;
  }
  openWebBrowser = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (props.data) {
    // console.log(props.data.desc);
  }
  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
      {props.data ? (
        <View>
          <View style={styles.imageView}>
            <Image source={{ uri: `${props.data.img}` }} style={styles.image} />
          </View>

          <View style={styles.container}>
            <View style={styles.itemRowSP}>
              <Text style={styles.itemName}>{props.data.name}</Text>
            </View>

            <View style={styles.itemStyle}>
              <Text style={styles.category}>{props.data.category}</Text>
              {/* <Text style={styles.seperator}>|</Text> */}
              {/* <Text style={styles.price}>{dollars[props.data.price - 1]}</Text> */}
            </View>

            <View style={styles.details}>
              <Text style={styles.itemAddress}>
                {props.data.address}, {props.data.city}
              </Text>
            </View>
            <View style={styles.itemStyle}>
              <Text style={styles.desc}>
                {capitalizeFirstLetter(props.data.desc)}
              </Text>
            </View>

            <View>
              <TouchableURLComponent>
                <Text
                  style={styles.url}
                  onPress={() => openWebBrowser(props.data.url)}
                >
                  {props.data.url}
                </Text>
              </TouchableURLComponent>
            </View>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Detail;
