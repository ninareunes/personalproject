import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  replaceText: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    paddingLeft: 8,
    color: Colors.sndAccent,
    width: 200,
    textAlign: "center",
    lineHeight: 40
  }
});

export default styles;
