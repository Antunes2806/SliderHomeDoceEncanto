import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5f3f3",
    paddingLeft: 15,
    paddingRight: 15,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    top: "10%",
    marginHorizontal: "5%",
  },

  viewtotal: {
    backgroundColor: "#ff9bd0",
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 400,
    borderTopRightRadius: 400,
    flexDirection: "column",
    paddingTop: 80,
  },

  test: {
    width: "100%",
    height: "70%",
    backgroundColor: "yellow",
  },

  testing: {
    width: "100%",
    height: "30%",
    backgroundColor: "red",
  },

  imghome: {
    width: "100%",
    height: "100%",
  },

  imglogo: {
    width: 100,
    height: 150,
    left: "180%",
  },
  imglogoescrita: {
    width: "100%",
    height: "150%",
    right: "146%",
    bottom: "10%",
  },
});
