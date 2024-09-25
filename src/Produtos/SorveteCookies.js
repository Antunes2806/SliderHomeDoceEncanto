// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function SorveteCookies() {
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
        source={require("../assets/image/fundosvtcke.png")}
      />

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>SORVETE DE COOKIE</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.sorvetecokie}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image style={styles.seta} source={require("../assets/image/seta.png")} />

      <Text style={styles.txtsorvete}>Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies, criando uma experiência saborosa e irresistível em cada colherada !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  logo: {
    width: "10%",
    height: "10%",
    left: "75%",
    position: "absolute",
    top: "5%",
  },
  
  txtsorvete: {
    fontSize: 15,
    top: "55%",
    left: "55%",
    width: "45%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
  },

  txt: {
    fontSize: 30,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    transform: [{ rotate: "-90deg" }],
    top: "50%",
    right: "60%",
    position: "absolute",
  },

  row: {
    width: "75%",
    height: 2,
    backgroundColor: "brown",
    zIndex: 5,
    position: "absolute",
    top: "52%",
    right: "50%",
    transform: [{ rotate: "-90deg" }],
  },

  fundo: {
    width: "100%",
    height: "100%",
  },

  sorvetecokie: {
    width: "100%",
    height: "100%",
    left: 30,
    position: "absolute",
    top: "10%",
  },

  seta: {
    width: 450,
    height: 400,
    position: "absolute",
    top: "20%",
    left: "-0%",
  },

});

