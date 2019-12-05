import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  filter: {
    alignItems: "flex-end",
    marginVertical: 16,
    marginRight: 16
  },
  filterBtn: {
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    color: "red"
  }
});

export default styles;
