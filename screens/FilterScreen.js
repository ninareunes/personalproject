import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import { Slider } from "react-native-elements";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./stylesFilter";

import HeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import FilterCheckbox from "../components/FilterCheckbox";

const FilterScreen = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVege, setIsVege] = useState(false);
  const [isPopular, setIsPopular] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [isChangedRadius, setIsChangedRadius] = useState(0.5);

  const [isChangedPrice, setIsChangedPrice] = useState(1);

  const handleSliderPrice = newValue => {
    const str1 = "$";
    const n1 = str1.length;
    const str2 = "$$";
    const n2 = str2.length;
    const str3 = "$$$";
    const n3 = str3.length;

    if (newValue === n2) {
      newValue = str2;
      console.log(`${newValue}`);
    } else if (newValue === n3) {
      newValue = str3;
      console.log(`${newValue}`);
    } else {
      newValue = str1;
      console.log(`${newValue}`);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Moments</Text>
          <View style={styles.momentsitems}>
            <FilterCheckbox
              checked={isChecked}
              label="Brunch"
              name="food-croissant"
              onPress={() => console.log("hello")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Lunch"
              name="food-fork-drink"
              onPress={() => console.log("lunch")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Dinner"
              name="food-variant"
              onPress={() => console.log("dinner")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Bar"
              name="glass-wine"
              onPress={() => console.log("bar")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Shop"
              name="basket"
              onPress={() => console.log("shop")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Culture"
              name="star"
              onPress={() => console.log("culture")}
            />
            <FilterCheckbox
              checked={isChecked}
              label="Nightlife"
              name="weather-night"
              onPress={() => console.log("night")}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing</Text>
          <View style={styles.pricingitems}>
            <Slider
              style={{ width: 300, marginVertical: 8 }}
              step={1}
              minimumValue={1}
              maximumValue={3}
              value={isChangedPrice}
              onValueChange={newValue => setIsChangedPrice(newValue)}
              onSlidingComplete={newValue => handleSliderPrice(newValue)}
              animateTransitions={true}
              animationType="spring"
              minimumTrackTintColor={Colors.accent}
              maximumTrackTintColor="#E9E9EA"
              thumbTintColor={Colors.accent}
            />
            <Text style={styles.pricingText}>Max {isChangedPrice} </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Maximum Radius</Text>
          <View style={{ alignItems: "stretch", justifyContent: "center" }}>
            <Slider
              style={{ width: 300, marginVertical: 8 }}
              step={1.5}
              minimumValue={0.5}
              maximumValue={10}
              value={isChangedRadius}
              onValueChange={newValue => setIsChangedRadius(newValue)}
              onSlidingComplete={newValue => setIsChangedRadius(newValue)}
              animateTransitions={true}
              animationType="spring"
              minimumTrackTintColor={Colors.accent}
              maximumTrackTintColor="#E9E9EA"
              thumbTintColor={Colors.accent}
            />
            <Text style={styles.radiusText}>Max {isChangedRadius} km away</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More</Text>
          <View style={styles.moreitems}>
            <FilterSwitch
              label="Open now"
              switchState={isOpen}
              switchOnChange={newValue => setIsOpen(newValue)}
            />
            <FilterSwitch
              label="Vegetarian / Vegan"
              switchState={isVege}
              switchOnChange={newValue => setIsVege(newValue)}
            />
            <FilterSwitch
              label="Popular"
              switchState={isPopular}
              switchOnChange={newValue => setIsPopular(newValue)}
            />
          </View>
        </View>
        <View style={styles.sectionButton}>
          <TouchableOpacity
            onPress={() => {
              console.log("Save filter setting");
            }}
            style={styles.saveButton}
          >
            <Icon name="check" size={25} color={Colors.bColor} />
            <Text style={styles.saveText}>Save & Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

FilterScreen.navigationOptions = {
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
        onPress={() => {
          console.log("Save filter setting");
        }}
      />
    </HeaderButtons>
  )
};

export default FilterScreen;
