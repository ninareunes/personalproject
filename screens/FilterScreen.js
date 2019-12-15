import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/spots";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import styles from "./stylesFilter";

import HeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";

const FilterScreen = props => {
  const { navigation } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isBrunch, setIsBrunch] = useState({
    intent: "Breakfast",
    state: false
  });
  console.log({ isBrunch });
  const [isLunch, setIsLunch] = useState(false);
  const [isDinner, setIsDinner] = useState(false);
  const [isBar, setIsBar] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const [isCulture, setIsCulture] = useState(false);
  const [isNightlife, setIsNightlife] = useState(false);

  const [save, setSave] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      open: isOpen
    };
    //console.log(appliedFilters);

    dispatch(setFilters(appliedFilters));
  }, [isOpen, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  // const [isChangedRadius, setIsChangedRadius] = useState(0.5);

  // const [isChangedPrice, setIsChangedPrice] = useState(1);
  // const dollars = ["$", "$$", "$$$"];

  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Moments</Text>
          <View style={styles.moreitems}>
            <FilterSwitch
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
            />
            {/*
            <FilterCheckbox
              checked={isChecked}
              label="Nightlife"
              name="weather-night"
              onPress={() => console.log("night")}
            /> */}
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
            <Icon name="check" size={25} color="#FFFFFF" />
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
