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

export default function CupcakeFV() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });
// Pega o item específico de "Donuts de Morango" e verifica se existe
const item = Categorias[2]?.items.find((product) => product.id === "11");

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
        source={require("../assets/image/fundocupfrv.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>CUPCAKE DE FRUTAS VERMELHAS</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.cupcakedefrutas}
        source={require("../assets/image/cccereja.png")}
      />

      <Text style={styles.txtcupcake}>
        Um sabor fresco e tem o equilíbrio perfeito entre doçura e acidez, com
        uma cobertura suave que realça o sabor das frutas !
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
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "lightpink",
    position: "absolute",
    top: "17%",
  },

  txt: {
    fontSize: 30,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: "10%",
  },

  txtcupcake: {
    fontSize: 20,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 400,
  },

  cupcakedefrutas: {
    width: 300,
    height: 500,
    position: "absolute",
    top: "15%",
  },

  fundo: {
    width: "100%",
    height: "100%",
  },
  elementos: {
    position: "absolute",
    left: 0,
    bottom: 90,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  txtvalor: {
    fontSize: 25,
    fontWeight: "700",
  },

  seta: {
    position: "absolute",
    top: 100,
    left: 10,
  },
});
