import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpots } from "../store/actions/spots";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import styles from "./stylesHome";
import MapView, { Marker, Callout } from "react-native-maps";
import MarkerSpot from "../models/marker";

import HeaderButton from "../components/HeaderButton";
import SpotList from "../components/SpotList";

const HomeScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: "",
    lng: ""
  });

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  //CURRENT LOCATION

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "No permission allowed",
        "You need to grant location permissions to use this app",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      getUserLocation();
    }
    return () => {
      isMounted = true;
    };
  }, []);

  const getUserLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    let isCancelled = false;
    try {
      if (!isCancelled) {
        const location = await Location.getCurrentPositionAsync();

        setCurrentLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        });
      }
      return () => {
        isCancelled = true;
      };
    } catch (err) {
      Alert.alert("Could not fetch location", "Please try again later", [
        { text: "Okay" }
      ]);
    }
  };

  let lat = Number(currentLocation.lat);
  let lng = Number(currentLocation.lng);

  const mapRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0099,
    longitudeDelta: 0.0099
  };

  const spots = useSelector(state => state.spots.spots); //slice of state
  const filterValues = useSelector(state => state.spots.appliedFilters);
  console.log(filterValues);
  const dispatch = useDispatch();

  let coordinates = [];

  spots.map(spot => {
    coordinates.push(
      new MarkerSpot(spot.lat, spot.long, spot.id, spot.name, spot.img)
    );
  });

  let myCurrentLocation = { latitude: lat, longitude: lng };

  useEffect(() => {
    let fetchLocation = { latitude: lat, longitude: lng };
    const filters = {
      open: filterValues.open,
      intent: filterValues.intent,
      prices: filterValues.prices
    };
    if (currentLocation.lat != 0 && currentLocation.lng != 0) {
      fetchLocation = { latitude: lat, longitude: lng };
      dispatch(fetchSpots(fetchLocation, filters));
    }
  }, [dispatch, currentLocation, filterValues]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.bColor
        }}
      >
        <ActivityIndicator size="large" color={Colors.accent} />
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
      {currentLocation.lat && currentLocation.lng ? (
        <View>
          <View style={styles.filter}>
            <TouchableCmp
              onPress={() => props.navigation.navigate({ routeName: "Filter" })}
            >
              <View style={styles.filterBtn}>
                {/* <Icon name="filter" size={25} color="#F2BBAE" /> */}
                <Text style={styles.filterText}>Filter</Text>
              </View>
            </TouchableCmp>
          </View>
          <View style={{ flex: 1 }}>
            <MapView region={mapRegion} style={styles.map}>
              {coordinates.map(coordinate => (
                <Marker
                  onLoad={() => forceUpdate()}
                  key={coordinate.id}
                  coordinate={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude
                  }}
                  pinColor={Colors.sndAccent}
                >
                  <Callout tooltip={true} onLoad={() => forceUpdate()}>
                    <View style={styles.calloutItem}>
                      <TouchableCmp style={styles.rippleItem}>
                        <View style={styles.calloutContainer}>
                          <View style={styles.calloutViewImage}>
                            <Text style={styles.calloutViewImage}>
                              <Image
                                style={styles.calloutImage}
                                source={{ uri: `${coordinate.img}` }}
                              />
                            </Text>
                          </View>

                          <View style={styles.calloutCTText}>
                            <Text style={styles.calloutText}>
                              {coordinate.name}
                            </Text>
                          </View>
                        </View>
                      </TouchableCmp>
                    </View>
                  </Callout>
                </Marker>
              ))}

              <Marker
                coordinate={myCurrentLocation}
                pinColor={Colors.accent}
                title="Your location"
              />
            </MapView>
          </View>
          <View style={styles.tchMap}>
            <TouchableCmp
              onPress={() =>
                props.navigation.navigate({
                  routeName: "BigMap",
                  params: {
                    lat: lat,
                    long: lng
                  }
                })
              }
            >
              <Text style={styles.tchMapText}>Show on a big map</Text>
            </TouchableCmp>
          </View>
          <Text style={styles.sectionTitle}>Your recommendations</Text>

          <SpotList listData={spots} navigation={props.navigation} />
        </View>
      ) : null}
    </ScrollView>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Neighbourhood",
  headerTitleStyle: {
    textAlign: "center",
    flex: 1
  },
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Search"
        style={{ paddingLeft: 8 }}
        MyIconComponent={Ionicons}
        iconName="ios-search"
        onPress={() => {
          console.log("Search!");
        }}
      />
    </HeaderButtons>
  ),
  headerRight: <View style={{ padding: 6 }}></View>
};

export default HomeScreen;
