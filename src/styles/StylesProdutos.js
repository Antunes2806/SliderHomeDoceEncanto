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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ff9bd0",
    height: 200,
    width: 300,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 19, // pra descer a view
    shadowOpacity: 9, //itencidade da sombra
    shadowColor: "pink", // cor da sombra
    shadowOffset: { width: 9, height: 9 }, //pra aparecer ao redor da view toda
  },

  txtdonuts: {
    fontSize: 30,
    alignItems: "flex-end",
  },

  btnsaibamais: {
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    height: 30,
    width: 80,
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
    alignItems: "center",
    height: 30,
    width: 80,
    backgroundColor: "green",
    borderRadius: 20,
  },
});
