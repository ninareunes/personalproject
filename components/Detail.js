import React from "react";
import {
  Platform,
  View,
  Text,
  Switch,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../screens/stylesDetail";

const Detail = props => {
  let TouchableURLComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableURLComponent = TouchableNativeFeedback;
  }
  openWebBrowser = async url => {
    await WebBrowser.openBrowserAsync("https://" + url);
  };
  //console.log(props.data.name);

  if (props.data) {
    console.log(props.data.name);
  }
  return (
    <ScrollView>
      {props.data ? (
        <View>
          <View style={styles.imageView}>
            <Image source={{ uri: `${props.data.img}` }} style={styles.image} />
          </View>

          <View style={styles.container}>
            <View style={styles.itemRowSP}>
              <Text style={styles.itemName}>{props.data.name}</Text>
              <Text style={styles.itemRating}>{props.data.rating}/5</Text>
            </View>

            <View style={styles.itemStyle}>
              <Text style={styles.category}>{props.data.category}</Text>
              <Text style={styles.seperator}>|</Text>
              <Text>{props.data.img}</Text>

              <Text style={styles.price}>{props.data.price}</Text>
            </View>

            <View style={styles.details}>
              <Text style={styles.itemAddress}>
                {props.data.address}, {props.data.city}
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
