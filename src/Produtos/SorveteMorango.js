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

export default function SorveteMorango() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });
  const item = Categorias[1]?.items.find((product) => product.id === "5");

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
        source={require("../assets/image/fundosvtmor.png")}
      />
      <TouchableOpacity
        style={styles.seta1}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>SORVETE DE MORANGO</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.sorvetemorango}
        source={require("../assets/image/svtmor.png")}
      />

      <Image style={styles.seta} source={require("../assets/image/seta.png")} />

      <Text style={styles.txtsorvete}>
        Um sabor refrescante feito com morangos frescos e maduros, esse sorvete
        traz um sabor doce e natural, perfeito para quem ama frutas !
      </Text>

      <View style={styles.elementos}>
        <TouchableOpacity
          style={styles.car}
          onPress={handleAddToCart}
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

  txtsorvete: {
    fontSize: 15, // Tamanho do texto
    top: "55%",
    left: "55%", // Alinha a esquerda
    width: "45%", // Largura do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "70%", // Largura do texto
    textAlign: "center", // Centraliza o texto
    transform: [{ rotate: "-90deg" }], // Rotaciona o texto
    top: "50%",
    right: "55%", // Alinha a direita
    position: "absolute", // Posicionamento absoluto para controle preciso
  },

  row: {
    width: "75%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "lightpink", // Cor da linha
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "52%",
    right: "50%", // Alinha a direita
    transform: [{ rotate: "-90deg" }], // Rotaciona a linha
  },

  fundo: {
    width: "100%", // Largura da imagem de fundo
    height: "100%", // Altura da imagem de fundo
  },

  sorvetemorango: {
    width: "90%",  // Largura da imagem
    height: "100%", // Altura da imagem
    right: 50, // Alinha a direita
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "5%",
  },

  seta: {
    width: 450, // Largura da seta
    height: 400, // Altura da seta
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "20%",
    left: "-0%", // Alinha a esquerda
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
    fontSize: 25,
    fontWeight: "700",
  },

  seta1: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
