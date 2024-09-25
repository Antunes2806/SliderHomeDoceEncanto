// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

// Import AntDesign
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CupcakeDocedeLeite() {
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
        source={require("../assets/image/fundocupdl.png")}
      />

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>CUPCAKE DE DOCE DE LEITE</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.cupcakededocedeleite}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Text style={styles.txtcupcake}>
      Um clássico brasileiro, com uma massa leve combinada com um recheio generoso de doce de leite, coroado com uma cobertura que derrete na boca !
      </Text>
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
    backgroundColor: "brown",
    position: "absolute",
    top: "17%",
  },

  logo: {
    width: "10%",
    height: "10%",
    left: "80%",
    position: "absolute",
    top: "5%",
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

  cupcakededocedeleite: {
    width: 300,
    height: 500,
    position: "absolute",
    top: "15%",
  },

  fundo: {
    width: "100%",
    height: "100%",
  },
});
