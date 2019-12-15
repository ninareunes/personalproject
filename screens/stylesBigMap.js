import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    height: "100%",
    width: "100%"
  },
  calloutItem: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 90,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center"
  },

  calloutContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },

  calloutViewImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 0,
    borderColor: "#FFFFFF"
  },
  calloutImage: {
    marginBottom: 10,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: Colors.accent,
    resizeMode: "cover"
  },
  calloutCTText: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: 110,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 10
  },
  calloutText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.primaryColor,
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 8
  }
});

export default styles;
