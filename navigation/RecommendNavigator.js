import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import Colors from "../constants/Colors";

import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import BigMapScreen from "../screens/BigMapScreen";
import DetailScreen from "../screens/DetailScreen";

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

export default createAppContainer(RecommendNavigator);
