import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  imageView: {},

  image: {
    height: 500,
    width: "100%",
    backgroundColor: Colors.accent
  },

  container: {
    marginHorizontal: 16,
    marginVertical: 16,
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
    fontSize: 22
  },

  itemRating: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor
  },

  details: {
    marginTop: 8,
    borderBottomColor: "rgba(0, 0, 0, 0.22)",
    borderBottomWidth: 1,
    borderRadius: 2,
    paddingBottom: 10
  },

  itemAddress: {
    fontSize: 17,
    fontFamily: "open-sans",
    textTransform: "capitalize"
  },

  itemStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  category: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginTop: 8,
    textTransform: "capitalize"
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
    marginTop: 8,
    textAlign: "center",
    marginBottom: 16,
    color: Colors.accent
  },
  desc: {
    marginVertical: 16,
    marginTop: 8,
    fontSize: 17,
    fontFamily: "open-sans",
    lineHeight: 30
  }
});

export default styles;
