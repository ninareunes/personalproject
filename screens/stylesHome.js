import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  header: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  title: {
    flex: 2
  },
  buttonSearch: {
    flex: 1,
    marginLeft: 16
  },

  item: {
    flex: 1,
    margin: 16,
    height: 80
  }
});

export default styles;
