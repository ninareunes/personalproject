import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  Switch,
  Platform,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/spots";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
// import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import styles from "./stylesFilter";
import { RadioButton } from "react-native-paper";

import HeaderButton from "../components/HeaderButton";

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
      />
    </View>
  );
};

const FilterScreen = props => {
  const { navigation } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState("");
  const [prices, setPrices] = useState("");

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      open: isOpen,
      intent: intent,
      prices: prices
    };

    dispatch(setFilters(appliedFilters));
  }, [isOpen, dispatch, intent, prices]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  //execute function whenever saveFilters changes , save is just a pointer to saveFilters
  //update save whenever state (filters added) changes

  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
      <View style={styles.container}>
        {/* <Button title={"Go back"} onPress={() => props.navigation.goBack()} /> */}
        {/* <Button title={"Go back"} onPress={() => props.navigation.navigate('Home', {appliedFilters: item.id, item: item})} /> */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Moments</Text>
          <View style={styles.momentItems}>
            <TouchableCmp
              onPress={() => {
                setIntent("breakfast");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="breakfast"
                    status={intent === "breakfast" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Breakfast</Text>
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={() => {
                setIntent("lunch");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="lunch"
                    status={intent === "lunch" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Lunch</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("dinner");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="dinner"
                    status={intent === "dinner" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Dinner</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("coffee");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="coffee"
                    status={intent === "coffee" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Coffee</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("dessert");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="dessert"
                    status={intent === "dessert" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Dessert</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("drinks");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="drinks"
                    status={intent === "drinks" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Drinks</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("shopping");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="shopping"
                    status={intent === "shopping" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Shopping</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("fun");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="fun"
                    status={intent === "fun" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Fun</Text>
              </View>
            </TouchableCmp>

            <TouchableCmp
              onPress={() => {
                setIntent("sights");
              }}
              style={styles.rdbTch}
            >
              <View style={styles.rdbContainer}>
                <View pointerEvents="none">
                  <RadioButton
                    value="sights"
                    status={intent === "sights" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>Sights</Text>
              </View>
            </TouchableCmp>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Range</Text>
          <View style={styles.momentItems}>
            <TouchableCmp
              onPress={() => {
                setPrices("1");
              }}
              style={styles.rdbTchPrice}
            >
              <View style={styles.rdbContainerPrice}>
                <View pointerEvents="none">
                  <RadioButton
                    value="1"
                    status={prices === "1" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>$</Text>
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={() => {
                setPrices("2");
              }}
              style={styles.rdbTchPrice}
            >
              <View style={styles.rdbContainerPrice}>
                <View pointerEvents="none">
                  <RadioButton
                    value="2"
                    status={prices === "2" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>$$</Text>
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={() => {
                setPrices("3");
              }}
              style={styles.rdbTchPrice}
            >
              <View
                style={{
                  ...styles.rdbContainerPrice,
                  ...{ marginLeft: Platform.OS === "ios" ? 10 : 0 }
                }}
              >
                <View pointerEvents="none">
                  <RadioButton
                    value="3"
                    status={prices === "3" ? "checked" : "unchecked"}
                    color="#F2BBAE"
                    uncheckedColor="#F2BBAE"
                  />
                </View>
                <Text style={styles.rdbText}>$$$</Text>
              </View>
            </TouchableCmp>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More</Text>
          <View style={styles.moreitems}>
            <FilterSwitch
              label="Open now"
              state={isOpen}
              onChange={newValue => setIsOpen(newValue)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter places",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          MyIconComponent={Ionicons}
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

export default FilterScreen;
