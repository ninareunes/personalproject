import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  momentsitems: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  itemsrow: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 44,
    minHeight: 44,
    margin: 10,
    padding: 10,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10
  },

  momentText: {
    fontSize: 17,
    fontFamily: "open-sans"

    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3
  }
});

export default styles;
