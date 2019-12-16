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
    backgroundColor: Colors.sndAccent,
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
    color: "#FFFFFF"
  },

  sectionTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.primaryColor
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
  },

  momentItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8
  },

  rdbTch: {
    flexDirection: "row",
    width: 140,
    marginRight: 40
  },

  rdbTchPrice: {
    flexDirection: "row",
    width: 80,
    marginRight: 10
  },

  rdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 44,
    minHeight: 44,
    padding: 10,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical:
      Platform.OS === "android" && Platform.Version >= 21 ? 16 : 8,
    marginRight: Platform.OS === "android" && Platform.Version >= 21 ? 16 : 10
  },

  rdbContainerPrice: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 44,
    minHeight: 44,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical:
      Platform.OS === "android" && Platform.Version >= 21 ? 16 : 8,
    marginRight: Platform.OS === "android" && Platform.Version >= 21 ? 16 : 10
  },

  rdbText: {
    fontSize: 17,
    fontFamily: "open-sans",
    paddingRight: 30
  },
  radiobutton: {
    color: Colors.sndAccent
  }
});

export default styles;
