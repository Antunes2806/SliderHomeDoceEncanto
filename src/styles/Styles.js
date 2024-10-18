import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
  },

  header: {
    flexDirection: "row", // Alinha os elementos em linha
    paddingTop: 20, // Espaço no topo
    height: 160, // Define uma altura para o cabeçalho 
    paddingLeft: 40, // Espaço à esquerda
  },

  viewLogoEscrita: {
    width: "60%",  // Define a largura
    height: "100%", // Define a altura
    alignItems: "flex-end",  // Alinha os itens à direita
  },

  imgEscrita: {
    width: 350, // Define a largura
    height: "100%", // Define a altura
  },

  viewLogo: {
    width: "40%", // Define a largura
    height: "100%", // Define a altura
    justifyContent: "center", // Centraliza horizontalmente
    alignItems: "flex-end", // Centraliza verticalmente
  },

  imgLogo: {
    width: "80%", // Defina a largura da logo
    height: "70%", // Define a altura da logo
  },

  teste: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: "white", // Define a cor de fundo
    paddingLeft: 30, // Espaço a esquerda
    paddingRight: 30, // Espaço a direita
  },

  circulo: {
    height: "100%", // Define a altura
    width: "100%", // Define a largura
    backgroundColor: "#ff9db0", // Define a cor de fundo
    borderTopEndRadius: 200, // Arredondada o canto superior direito
    borderTopStartRadius: 200, // Arredonda o canto superior esquerdo
  },

  viewImgDnt: {
    width: "100%", // Define a largura da imagem
    height: "85%", // Define a altura da imagem
  },

  imgdnt: {
    width: "100%", // Define a largura da imagem
    height: 765, // Define a altura da imagem
    right: "10%", // Move para a direita
    top: -90, // Move para cima (pois está em negativo)
    left: 20, // Move para a esquerda
    backgroundColor: "none", // Define a cor de fundo ( none = sem cor de fundo)
  },

  viewBtnModal: {
    width: "100%", // Define a largura do botão
    height: "15%", // Define a altura do botão
    alignItems: "flex-end", // Alinha o botão a direita
    paddingRight: 10,  // Espaço à direita
  },

  proxtxt: {
    color: "white", // Define a cor
    fontSize: 20, // Tamanho da fonte
    fontWeight: 700, // Deixa o texto em negrito
  },

  btn: {
    backgroundColor: "#4d2929", // Define a cor de fundo
    width: "50%", // Define a largura do botão
    height: "40%", // Define a altura do botão
    borderRadius: 10, // Deixa os cantos arredondados
    justifyContent: "space-between", // Distribui espaço entre os itens
    alignItems: "center", // Centraliza os itens
    flexDirection: "row", // Alinha os itens em linha (horizontalmente)
    paddingLeft: 20, // Espaço à esquerda
    paddingRight: 20, // Espaço à direita
  },
  //style pg favoritos
  containerfavoritos: {
    flex: 1, // Ocupa toda a tela
  },
  fundofv: {
    width: "100%", // Define a largura da imagem de fundo
    height: "100%", // Define a altura da imagem de fundo
  },
  headerfv: {
    height: "15%", // Define a altura
    justifyContent: "space-between", // Distribui espaço entre os itens
    flexDirection: "row", // Alinha os itens em linha
    paddingLeft: 20, // Espaço à esquerda
  },
  viewTitulofv: {
    justifyContent: "center", // Centraliza verticalmente
  },
  titulofv: {
    color: "#4d2929", // Define a cor
    right: "10%", // Move para a direita
  },

  viewLogofv: {
    width: "20%", // Define a largura da imagem
    height: "100%",  // Define a altura da imagem
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "flex-end", // Alinha à direita
  },

  imgLogofv: {
    width: 120, // Define a largura da imagem de fundo
    height: 100, // Define a altura da imagem de fundo
    left: "15%", // Move para a esquerda
  },
  viewIconfv: {
    alignItems: "flex-start", // Alinha à esquerda
    justifyContent: "center", // Centraliza verticalmente
    width: "20%", // Define a largura
    
  },
});
