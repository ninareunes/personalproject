import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FilterScreen from "../screens/FilterScreen";
import BigMapScreen from "../screens/BigMapScreen";
import DetailScreen from "../screens/DetailScreen";
import ListsScreen from "../screens/ListsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PreferencesScreen from "../screens/PreferencesScreen";

const RecommendNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Home`,
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  },
  BigMap: BigMapScreen,
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => ({
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  }
});
const FilterNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Home`,
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  },
  Filter: {
    screen: FilterScreen,
    navigationOptions: () => ({
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  }
});

const ListNavigator = createStackNavigator({
  ListOverview: {
    screen: ListsScreen,
    navigationOptions: () => ({
      title: `Your Lists`,
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => ({
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  }
});

const ProfileNavigator = createStackNavigator({
  ProfileOverview: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: `Your Profile`,
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  },
  Prefrences: {
    screen: PreferencesScreen,
    navigationOptions: () => ({
      title: `Your Preferences`,
      headerBackTitle: `Back`,
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: Colors.bColor
    })
  }
});

const tabScreenConfig = {
  Home: {
    screen: RecommendNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-home" size={28} color={tabInfo.tintColor} />;
      }
    }
  },
  Lists: {
    screen: ListNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-list" size={28} color={tabInfo.tintColor} />;
      }
    }
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-person" size={28} color={tabInfo.tintColor} />
        );
      }
    }
  }
};

const RootNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.primaryColor,
        shifting: true,
        barStyle: {
          backgroundColor: "white"
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
          activeTabStyle: {
            fontFamily: "open-sans-bold"
          }
        }
      });

export default createAppContainer(RootNavigator);
