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

export default function BrigNN() {
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
        source={require("../assets/image/fundobrigninhnt.png")}
      />

      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>BRIGADEIRO DE NINHO COM NUTELA</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.brigadeironn}
        source={require("../assets/image/brigNN.png")}
      />

      <Text style={styles.txtbrigadeiro}>
        Uma combinação perfeita entre a cremosidade do leite Ninho e o recheio
        irresistível de Nutella, criando uma explosão de sabores a cada mordida
        !
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
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "60%",
    height: 2,
    backgroundColor: "darkred",
    position: "absolute",
    top: "25%",
  },

  txt: {
    fontSize: 30,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: "15%",
  },

  txtbrigadeiro: {
    fontSize: 20,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 300,
  },

  brigadeironn: {
    width: 300,
    height: 400,
    position: "absolute",
    top: "20%",
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
