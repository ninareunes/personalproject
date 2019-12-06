import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  filter: {
    alignItems: "flex-end",
    marginVertical: 16,
    marginRight: 16
  },

  filterBtn: {
    minHeight: 44,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },

  filterText: {
    fontSize: 17,
    fontFamily: "open-sans-bold",
    paddingLeft: 8,
    color: "#979797"
  }
});

export default styles;
