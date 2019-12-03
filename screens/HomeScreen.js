import React from "react";
import { Text, View, TouchableOpacity, Button, FlatList } from "react-native";
import { SPOTS } from "../data/dummy-data";
import styles from "./stylesHome";
import SearchSvg from "../components/SearchSvg";
import HomeRec from "../components/HomeRec";

const HomeScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate({
            routeName: "Detail",
            params: {
              spotId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.buttonSearch}
          onPress={this.onPress}
        >
          <SearchSvg />
        </TouchableOpacity>
        <Text style={styles.title}>Neighbourhood.</Text>
      </View> */}
      <Button
        title="go to bigmap"
        onPress={() => {
          props.navigation.navigate("BigMap");
        }}
      />
      {/* <HomeRec /> */}
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={SPOTS}
          renderItem={renderGridItem}
        />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Neighbourhood"
};

export default HomeScreen;
