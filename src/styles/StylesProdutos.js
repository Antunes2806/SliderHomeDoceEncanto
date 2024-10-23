import { StyleSheet } from "react-native";

export const stylesProdutos = StyleSheet.create({
  icon: {
    alignItems: "flex-start", // Alinha o ícone no início horizontalmente
    justifyContent: "center", // Centraliza verticalmente
    width: "20%", // Define a largura do ícone
  },
  viewtitulo: {
    justifyContent: "center", // Centraliza verticalmente
  },
  titulopd: {
    color: "#4d2929", // Define a cor do texto
    right: "10%", // Alinha o texto a direita
  },

  viewLogopd: {
    width: "20%", // Defina a largura
    height: "100%", // Define a altura
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "flex-end", // Alinha o conteúdo à direita
  },

  imgLogopd: {
    width: 120, // Define a largura da logo
    height: 100, // Define a altura da logo
    left: "15%", // Move a imagem à esquerda
  },

  containerpesquisa: {
    paddingHorizontal: 20, // Adiciona espaço horizontal
  },
  ViewTxtNome: {
    marginTop: 70, // Adiciona uma margem superior
  },

  txtNome: {
    fontSize: 35, // Tamanho do texto
    paddingHorizontal: 25, // Adiciona espaço horizontal
    fontFamily: "Rokkitt", // Fonte personalizada
  },
  categorias: {
    paddingHorizontal: 20, // Espaço horizontal
    paddingVertical: 25, // Espaço vertical
  },

  txtcategorias: {
    fontSize: 20, // Tamanho do texto
    fontWeight: "500", // Deixa a fonte mais grossa
    fontFamily: "Rokkitt", // Fonte personalizada
  },
  Viewprodutos: {
    alignItems: "center", // Centraliza horizontalmente
    justifyContent: "center", // Centraliza verticalmente
    paddingTop: 100, // Adiciona um espaço no topo
    paddingBottom: 30, // Adiciona espaço na parte inferior
    position: "relative", // Deixa a posição relativa
  },

  donuts: {
    position: "relative", // Deixa a posição relativa
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#ed8e8e", // Define a cor do fundo
    height: 280, // Define a altura
    width: 280, // Define a largura
    borderRadius: 40, // Deixa a borda arredondada
  },

  imgdonutspd: {
    width: 350, // Largura da imagem
    height: 350, // Altura da imagem
    position: "absolute", // Posição absoluta
    top: -150, // Move para cima
    left: -20, // Move a imagem para a esquerda
  },

  txtdonuts: {
    fontSize: 25, // Tamanho da fonte
    marginBottom: 10, // Espaço inferior
  },

  btnsaibamais: {
    backgroundColor: "black", // Cor de fundo
    alignItems: "center", // Centraliza horizontalmente
    borderRadius: 20, // Deixa a borda arredondada
    height: 30, // Define a altura do botão
    width: 80, // Define a largura do botão
  },

  btncarrinho: {
    alignItems: "center", // Centraliza horizontalmente
    height: 30, // Define a altura do carrinho
    width: 80, // Define a largura do carrinho
    backgroundColor: "green", // Cor de fundo
    borderRadius: 20, // Deixa a borda arredondada
  },
});
