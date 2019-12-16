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
//import FilterSwitch from "../components/FilterSwitch";
import FilterCheckbox from "../components/FilterCheckbox";

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
  const [isChecked, setIsChecked] = useState(false);

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  // const [isBrunch, setIsBrunch] = useState({
  //   intent: "Breakfast",
  //   state: false
  // });

  // const [isLunch, setIsLunch] = useState(false);
  // const [isDinner, setIsDinner] = useState(false);
  // const [isBar, setIsBar] = useState(false);
  // const [isShop, setIsShop] = useState(false);
  // const [isCulture, setIsCulture] = useState(false);
  // const [isNightlife, setIsNightlife] = useState(false);

  const dispatch = useDispatch();
  //let appliedFilters;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      open: isOpen,
      intent: intent
    };

    dispatch(setFilters(appliedFilters));
  }, [isOpen, dispatch, intent]);

  //gathers our filters, useCallback makes sure that savefilters only updates when state changes

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  //execute function whenever saveFilters changes , save is just a pointer to saveFilters
  //update save whenever state (filters added) changes

  // const [isChangedRadius, setIsChangedRadius] = useState(0.5);

  // const [isChangedPrice, setIsChangedPrice] = useState(1);
  // const dollars = ["$", "$$", "$$$"];

  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
      <View style={styles.container}>
        {/* <Button title={"Go back"} onPress={() => props.navigation.goBack()} /> */}
        {/* <Button title={"Go back"} onPress={() => props.navigation.navigate('Home', {appliedFilters: item.id, item: item})} /> */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Moments</Text>
          <View style={styles.momentitems}>
            {/* <FilterSwitch
              label="Brunch"
              name="food-croissant"
              state={isBrunch}
              onChange={newValue => setIsBrunch(newValue)}
            />
            <FilterSwitch
              label="Lunch"
              name="food-fork-drink"
              state={isLunch}
              onChange={newValue => setIsLunch(newValue)}
            />
            <FilterSwitch
              label="Dinner"
              name="food-variant"
              state={isDinner}
              onChange={newValue => setIsDinner(newValue)}
            />
            <FilterSwitch
              label="Bar"
              name="glass-wine"
              state={isBar}
              onChange={newValue => setIsBar(newValue)}
            />
            <FilterSwitch
              label="Shop"
              name="basket"
              state={isShop}
              onChange={newValue => setIsShop(newValue)}
            />
            <FilterSwitch
              label="Culture"
              name="star"
              state={isCulture}
              onChange={newValue => setIsCulture(newValue)}
            />
            <FilterSwitch
              label="Nightlife"
              name="weather-night"
              state={isNightlife}
              onChange={newValue => setIsNightlife(newValue)}
            /> */}
            {/*
            <FilterCheckbox
              checked={isChecked}
              label="Nightlife"
              name="weather-night"
              onPress={() => console.log("night")}
            /> */}

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
                    style={styles.radiobutton}
                  />
                </View>
                <Text style={styles.rdbText}>Dinner</Text>
              </View>
            </TouchableCmp>

            {/* <RadioButton
              value="lunch"
              status={intent === "lunch" ? "checked" : "unchecked"}
              onPress={() => {
                setIntent("lunch");
              }}
              color="#F2BBAE"
            /> */}
            <RadioButton
              value="shopping"
              status={intent === "shopping" ? "checked" : "unchecked"}
              onPress={() => {
                setIntent("shopping");
              }}
            />
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
        <View style={styles.sectionButton}>
          <TouchableOpacity
            onPress={() => {
              console.log(`${isOpen}`);
            }}
            style={styles.saveButton}
          >
            {/* <Icon name="check" size={25} color="#FFFFFF" /> */}
            <Text style={styles.saveText}>Save & Search</Text>
          </TouchableOpacity>
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
