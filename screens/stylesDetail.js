import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  imageView: {},

  image: {
    height: 500,
    width: "100%"
  },

  container: {
    marginHorizontal: 16,
    marginTop: 16,
    flex: 1
  },
  itemRowSP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomColor: "rgba(0, 0, 0, 0.22)",
    borderBottomWidth: 1,
    borderRadius: 2,
    paddingBottom: 10
  },

  itemName: {
    fontFamily: "open-sans-bold",
    fontSize: 25
  },

  itemRating: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor
  },

  details: {
    marginTop: 8
  },

  itemAddress: {
    fontSize: 17,
    fontFamily: "open-sans"
  },

  itemStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  category: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginTop: 8
  },

  seperator: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginTop: 8,
    marginHorizontal: 16
  },

  price: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    marginTop: 8
  },

  url: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginTop: 8
  }
});

export default styles;
