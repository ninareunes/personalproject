import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,
    height: 110,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 3
  },

  rippleItem: { flex: 1 },

  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },

  itemImage: {
    flex: 1
  },

  itemText: {
    flex: 3,
    alignItems: "flex-start",
    padding: 8,
    marginLeft: 20
  },

  NameRating: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },

  itemTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.primaryColor
  },

  itemRating: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.primaryColor
  },

  itemDesc: {
    fontFamily: "open-sans",
    fontSize: 13,
    width: "85%"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2
  }
});

export default styles;
