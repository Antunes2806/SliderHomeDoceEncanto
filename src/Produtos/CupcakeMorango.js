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

export default function CupcakeMorango() {
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
        source={require("../assets/image/fundocupmor.png")}
      />

      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>CUPCAKE DE MORANGO</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.cupcakedemorango}
        source={require("../assets/image/cupcakemor.png")}
      />

      <Text style={styles.txtcupcake}>
        O sabor é perfeito para quem ama sabores frescos e suaves, coberto com
        chantilly, Uma opção doce e deliciosa !
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

  cupcakedemorango: {
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
