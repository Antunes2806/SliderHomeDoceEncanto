import { StyleSheet } from "react-native";

export const stylesProdutos = StyleSheet.create({
  headerprdt: {
    height: "13%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
  },
  icon: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "20%",
  },
  viewtitulo: {
    justifyContent: "center",
  },
  titulopd: {
    color: "#4d2929",
    right: "10%",
  },

  viewLogopd: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  imgLogopd: {
    width: 120,
    height: 100,
    left: "15%",
  },

  containerpesquisa: {
    height: 90,
  },
  txtNome: {
    fontSize: 30,
    fontFamily: "bold",
  },
  categorias: {
    height: 90,
  },

  txtcategorias: {
    fontSize: 30,
    fontFamily: "bold",
  },
  Viewprodutos: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },

  donuts: {
    backgroundColor: "brown",
    height: 350,
    width: 300,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 15,
  },
  txtdonuts: {
    fontSize: 30,
    left: 20,
    marginTop: 20,
  },

  btnsaibamais: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    padding: 5,
    height: 30,
    width: 80,
    opacity: 0.8,
    left: 20,
  },
  ViewDonuts: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  donutspd: {
    bottom: 20,
    width: "160%",
    height: "180%",
  },
  btncarrinho: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 30,
    width: 80,
    backgroundColor: "green",
    borderRadius: 20,
  },
});
