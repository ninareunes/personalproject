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
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import styles from "./stylesHome";
import MapView, { Marker, Callout } from "react-native-maps";
import MarkerSpot from "../models/marker";

import HeaderButton from "../components/HeaderButton";
import SpotList from "../components/SpotList";
//import CustomCallout from "../components/CustomCallout";

const HomeScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLL, setIsLoadingLL] = useState(false);
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

  // useEffect(() => {
  //   const loadLL = async () => {
  //     setIsLoadingLL(true);
  //     await getUserLocation();
  //     setIsLoadingLL(false);
  //   };
  //   loadLL();
  // }, []);

  const getUserLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    let isCancelled = false;
    try {
      if (!isCancelled) {
        const location = await Location.getCurrentPositionAsync();
        // {
        //   maximumAge: 60000, // only for Android
        //   accuracy: isAndroid ? Location.Accuracy.Low : Location.Accuracy.Lowest
        // }

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
  // console.log(typeof lat);
  // console.log(typeof lng);
  //console.log(currentLocation);

  if (currentLocation.lat && currentLocation.lng) {
    console.log("cl vast");
  }

  const mapRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0099,
    longitudeDelta: 0.0099
  };

  const spots = useSelector(state => state.spots.spots); //slice of state
  const dispatch = useDispatch();

  let coordinates = [];

  spots.map(spot => {
    coordinates.push(
      new MarkerSpot(spot.lat, spot.long, spot.id, spot.name, spot.img)
    );
  });

  useEffect(() => {
    //console.log("test");
    const loadSpots = async () => {
      setIsLoading(true);
      await dispatch(fetchSpots(lat, lng));
      setIsLoading(false);
    };
    loadSpots();
  }, [dispatch]);

  // const displayedSpots = spots.filter(spot => spot.name != " ");

  // if (spots.length === 0) {
  //   <View>
  //     <Text>No spots founded, maybe less specify your filters!</Text>
  //   </View>;
  // }

  // if (isLoadingLL) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: "center",
  //         alignItems: "center",
  //         backgroundColor: Colors.bColor
  //       }}
  //     >
  //       <ActivityIndicator size="large" color={Colors.accent} />
  //     </View>
  //   );
  // }

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

  let myCurrentLocation = { latitude: lat, longitude: lng };

  return (
    <ScrollView style={{ backgroundColor: Colors.bColor }}>
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
            onPress={() => props.navigation.navigate({ routeName: "BigMap" })}
          >
            <Text style={styles.tchMapText}>Show on a big map</Text>
          </TouchableCmp>
        </View>
        <Text style={styles.sectionTitle}>Your recommendations</Text>

        <SpotList listData={spots} navigation={props.navigation} />
      </View>
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
