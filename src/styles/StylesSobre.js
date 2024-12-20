import { StyleSheet } from "react-native";

export const stylesSobre = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  Viewtexto: {
    justifyContent: "flex-start",
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "white", // Define a cor
    width: "82%", // Define a largura
    height: "78%", // Define a altura
    borderColor: "black", // Cor da borda
    borderWidth: 3, // Define a largura da borda
    padding: 9, // Espaço interno em todos os lados
  },
  linha: {
    top: 25, // Move para baixo
    backgroundColor: "black", // Define a cor
    width: 250, // Define a largura
    height: 2, // Define a altura
  },
  linha2: {
    top: 90, /// Move para baixo
    backgroundColor: "black", // Define a cor
    width: 250, // Define a largura
    height: 2, // Define a altura
  },
  txt: {
    top: 60, // Move para baixo
    fontSize: 25, // Tamanho do texto
    fontFamily: "Nunito", // Fonte personalizada
    margin: 5, // Margem em todos os lados
    textAlign: "center", // Centraliza o texto
  },
  txtsobre: {
    top: 15, // Move para baixo
    fontSize: 30, // Tamanho do texto
    fontFamily: "League_Spartan", // Fonte personalizada
  },
  txtsubtitulo: {
    top: 15, // Move para baixo
    fontSize: 17, // Tamanho do texto
    fontFamily: "League_Spartan", // Fonte personalizada
  },

  ImgFundo: {
    width: "100%", // Define a largura da imagem
    height: "100%", // Define a altura da imagem
  },

  Viewcontato: {
    width: "100%", // Define a largura
    height: "20%", // Define a altura
    justifyContent: "flex-end", // Alinha o conteúdo final (embaixo)
  },

  Viewinsta: {
    bottom: -30, // Move para cima
    left: 17, // Move para a esquerda
    flexDirection: "row", // Alinha os elementos em linha
  },
  Viewlocalizacao: {
    bottom: -40, // Move para cima
    left: 10, // Move para a esquerda
    flexDirection: "row", // Alinha os elementos em linha
    alignItems: "center", // Centraliza os itens verticalmente
  },
  txtendereco: {
    left: 5, // Move para a esquerda
    fontFamily: "Nunito", // Fonte personalizada
  },
});
