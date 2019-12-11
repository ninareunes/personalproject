import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
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

const defaultStackNavOptions = {
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerBackTitle: `Back`
};

const RecommendNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `Home`,
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
          fontSize: 18
        }
      })
    },
    BigMap: BigMapScreen,
    Detail: {
      screen: DetailScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
          fontSize: 18
        }
      })
    }
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

// const FilterNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: () => ({
//         title: `Home`,
//         headerStyle: {
//           backgroundColor: Colors.primaryColor
//         },
//         headerTintColor: Colors.bColor
//       })
//     },
//     Filter: {
//       screen: FilterScreen,
//       navigationOptions: () => ({
//         headerStyle: {
//           backgroundColor: Colors.primaryColor
//         },
//         headerTintColor: Colors.bColor
//       })
//     }
//   },
//   { defaultNavigationOptions: defaultStackNavOptions }
// );

const ListNavigator = createStackNavigator(
  {
    ListOverview: {
      screen: ListsScreen,
      navigationOptions: () => ({
        title: `Your Lists`,
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor
      })
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor
      })
    }
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const ProfileNavigator = createStackNavigator(
  {
    ProfileOverview: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: `Your Profile`,
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
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.bColor
      })
    }
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

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
          backgroundColor: Colors.bColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.sndAccent,
          labelStyle: {
            fontFamily: "open-sans",
            fontSize: 12
          },
          indicatorStyle: {
            top: 0
          },
          style: {
            backgroundColor: Colors.bColor,
            borderTopColor: "transparent",
            paddingTop: 2
          }
        }
      });

export default createAppContainer(RootNavigator);
