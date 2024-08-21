import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    paddingTop: 20,
    height: 160,
  },

  viewLogo: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  viewLogoEscrita: {
    width: "60%",
    height: "100%",
    alignItems: "flex-end",
  },

  imgEscrita: {
    width: 350,
    height: "100%",
  },

  imgLogo: {
    width: "80%",
    height: "70%",
  },

  imglogo: {
    width: 100,
    height: 150,
  },

  imglogoescrita: {
    width: 350,
    height: 100,
  },

  teste: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
  },

  circulo: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ff9db0",
    borderTopEndRadius: 200,
    borderTopStartRadius: 200,
  },

  viewImgDnt: {
    width: "100%",
    height: "85%",
  },

  imgdnt: {
    width: "100%",
    height: 675,
    right: "10%",
    top: -90,
    left: 20,
    backgroundColor: "none",
  },

  viewBtnModal: {
    width: "100%",
    height: "15%",
    alignItems: "flex-end",
    paddingRight: 10,
  },

  btn: {
    backgroundColor: "#4d2929",
    width: "40%",
    height: "30%",
    borderRadius: 10,
  },
});
