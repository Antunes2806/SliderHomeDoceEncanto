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
import { useDispatch } from "react-redux";
import { Categorias } from "../database/items";
import { addToCart } from "../../CartReducer";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Brigtrad() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  // Pega o item específico de "Donuts de Morango" e verifica se existe
  const item = Categorias[3]?.items.find((product) => product.id === "12");

  const handleAddToCart = () => {
    if (item) {
      // Verifica se o item não é undefined
      dispatch(addToCart(item));
      navigation.navigate("Carrinho"); // Navega para o carrinho
    } else {
      console.error("Item não encontrado");
    }
  };

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundobrigtra.png")}
      />

      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>BRIGADEIRO TRADICIONAL</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.brigadeirotradicional}
        source={require("../assets/image/brigtrad.png")}
      />

      <Text style={styles.txtbrigadeiro}>
        O clássico que nunca sai de moda! Feito com chocolate de alta qualidade,
        é macio e cheio de sabor, ideal para quem busca o verdadeiro sabor do
        brigadeiro !
      </Text>

      <View style={styles.elementos}>
        <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
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
    flex: 1, // Ocupa toda a tela
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "90%", // Largura da linha
    height: 2,  // Grossura da linha
    backgroundColor: "darkred", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "20%",
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "85%", // Largura do  texto
    textAlign: "center", // Centraliza o texto
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "15%",
  },

  txtbrigadeiro: {
    fontSize: 20,  // Tamanho do texto
    top: "65%",
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
    width: 300, // Largura do texto
  },

  brigadeirotradicional: {
    width: 300, // Largura da imagem
    height: 400, // Altura da imagem
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "20%",
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
    flexDirection: "row",  // Disposição dos elementos em linha
    justifyContent: "space-evenly",  // Espaço igual entre os elementos
    alignItems: "center",
  },

  txtvalor: {
    fontSize: 25, // Tamanho do texto
    fontWeight: "700", // Deixa o texto em negrito
  },

  seta: {
    position: "absolute",  // Posição absoluta para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
