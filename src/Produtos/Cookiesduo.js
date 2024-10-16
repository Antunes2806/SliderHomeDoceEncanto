// Import react-native
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function CookiesDuo() {
  const navigation = useNavigation();
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundocokmisto.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>COOKIE MISTO </Text>

      <View style={styles.row}></View>

      <Image
        style={styles.cookieduo}
        source={require("../assets/image/ckduo.png")}
      />

      <Text style={styles.txtcookies}>
        {" "}
        Uma deliciosa mistura que combina diversos ingredientes, como pedaços de
        chocolate ao leite, chocolate brando e nozes, criando uma explosão de
        sabores a cada mordida !
      </Text>
      <View style={styles.elementos}>
        <TouchableOpacity
          style={styles.car}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <AntDesign name="shoppingcart" size={55} color="black" />
        </TouchableOpacity>

        <Text style={styles.txtvalor}>$15,00</Text>

        <TouchableOpacity
          style={styles.heart}
          onPress={() => navigation.navigate("Favoritos")}
        >
          <EvilIcons name="heart" size={70} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "wheat", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "17%",
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "60%", // Largura fixa
    textAlign: "center", // Centraliza o texto
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "10%",
  },

  txtcookies: {
    fontSize: 20, // Tamanho do texto
    top: "65%",
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
    width: 400, // Largura do texto
  },

  cookieduo: {
    width: 300, // Largura da imagem
    height: 500, // Altura da imagem
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "15%",
  },

  fundo: {
    width: "100%", // Largura da imagem de fundo
    height: "100%", // Altura da imagem de fundo
  },

  elementos: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    left: 0, // Alinha a esquerda
    bottom: 90,
    height: 60, // Altura fixa
    width: "100%", // Largura fixa
    flexDirection: "row", // Disposição dos elementos em linha
    justifyContent: "space-evenly", // Espaço igual entre os elementos
    alignItems: "center",
  },

  txtvalor: {
    fontSize: 25, // Tamanho do texto
    fontWeight: "700", // Deixa o texto em negrito
  },

  seta: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
