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
    paddingLeft: 40,
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

  viewLogo: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  imgLogo: {
    width: "80%",
    height: "70%",
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
    height: 765,
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

  proxtxt: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
  },

  btn: {
    backgroundColor: "#4d2929",
    width: "50%",
    height: "40%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  //style pg favoritos
  containerfavoritos: {
    flex: 1,
  },
  fundofv: {
    width: "100%",
    height: "100%",
  },
  headerfv: {
    height: "15%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
  },
  viewTitulofv: {
    justifyContent: "center",
  },
  titulofv: {
    color: "#4d2929",
    right: "10%",
  },

  viewLogofv: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  imgLogofv: {
    width: 120,
    height: 100,
    left: "15%",
  },
  viewIconfv: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "20%",
  },
});
