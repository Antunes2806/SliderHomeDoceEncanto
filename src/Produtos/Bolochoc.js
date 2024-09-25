// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function Bolochoc() {
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
        source={require("../assets/image/fundobolochoc.png")}
      />

      <Text style={styles.txt}>BOLO DE CHOCOLATE</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.bolochoc}
        source={require("../assets/image/bolochoc.png")}
      />

      <Text style={styles.txtbolos}>
        Um clássico irresistível com massa úmida e uma cobertura cremosa de
        chocolate, perfeito para quem adora intensos sabores de cacau !
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
    left: "75%",
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

  txtbolos: {
    fontSize: 20,
    top: "60%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 400,
  },

  bolochoc: {
    width: 300,
    height: 500,
    position: "absolute",
    top: "5%",
  },

  fundo: {
    width: "100%",
    height: "100%",
  },
});
