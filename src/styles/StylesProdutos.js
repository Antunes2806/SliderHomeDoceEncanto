import { StyleSheet } from "react-native";

export const stylesProdutos = StyleSheet.create({
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
    paddingHorizontal: 20,
  },
  ViewTxtNome: {
    marginTop: 70,
  },

  txtNome: {
    fontSize: 30,
    fontFamily: "Rokkit",
    paddingHorizontal: 20,
  },
  categorias: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  txtcategorias: {
    fontSize: 30,
    fontWeight: "500",
  },
  Viewprodutos: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 30,
    position: "relative",
  },

  donuts: {
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ed8e8e",
    height: 175,
    width: 270,
    borderRadius: 40,
    marginTop: 2, // pra descer a view
    shadowOpacity: 0.1, //itencidade da sombra
    shadowColor: "pink", // cor da sombra
    shadowOffset: { width: 9, height: 9 },
    shadowRadius: 100, //pra aparecer ao redor da view toda
    elevation: 10,
    paddingBottom: 10,
  },

  imgdonutspd: {
    width: 350,
    height: 350,
    position: "absolute",
    top: -150,
    left: -20,
  },

  txtdonuts: {
    fontSize: 25,
    marginBottom: 10,
  },

  btnsaibamais: {
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 20,
    height: 30,
    width: 80,
  },

  btncarrinho: {
    alignItems: "center",
    height: 30,
    width: 80,
    backgroundColor: "green",
    borderRadius: 20,
  },
});
