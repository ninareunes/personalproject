import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={props.MyIconComponent}
      iconSize={23}
      color={Colors.bColor}
    />
  );
};

export default CustomHeaderButton;
