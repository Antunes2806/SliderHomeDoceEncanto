// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function Bolored() {
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
        source={require("../assets/image/fundocokbranco.png")}
      />

      <Text style={styles.txt}>BOLO RED VELVET</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.bolocfv}
        source={require("../assets/image/boloCFV.png")}
      />

      <Text style={styles.txtbolos}>
        Um bolo macio e aveludado, com sua coloração vibrante, acompanhado de
        uma cobertura de cream cheese que equilibra perfeitamente o doce e o
        azedinho !
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
    backgroundColor: "red",
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

  bolocfv: {
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
