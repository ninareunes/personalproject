import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    flex: 1
  },

  section: {
    marginBottom: 16,
    borderBottomColor: "rgba(0, 0, 0, 0.22)",
    borderBottomWidth: 1,
    borderRadius: 2,
    paddingBottom: 16
  },

  sectionButton: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 3
  },

  saveButton: {
    minHeight: 44,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 32
  },

  saveText: {
    fontSize: 17,
    fontFamily: "open-sans-bold",
    paddingLeft: 8,
    color: Colors.bColor
  },

  sectionTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.primaryColor
  },

  momentsitems: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  momentText: {
    minWidth: 44,
    minHeight: 44,
    fontSize: 17,
    fontFamily: "open-sans",
    margin: 10,
    padding: 10,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10

    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3
  },

  selectedMoment: {
    backgroundColor: Colors.accent,
    color: "white",
    overflow: "hidden",
    minWidth: 44,
    minHeight: 44,
    fontSize: 17,
    fontFamily: "open-sans",
    margin: 10,
    padding: 10,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10
  },

  pricingText: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginVertical: 10
  },

  radiusText: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginVertical: 10
  },

  moreText: {
    fontSize: 17,
    fontFamily: "open-sans",
    marginVertical: 10,
    marginRight: 10
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2
  }
});

export default styles;
