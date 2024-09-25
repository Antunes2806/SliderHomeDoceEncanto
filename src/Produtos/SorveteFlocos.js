// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function SorveteFlocos() {
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
        source={require("../assets/image/fundosvtcrm.png")}
      />

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>SORVETE DE FLOCOS</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.sorveteflocos}
        source={require("../assets/image/svtflocos.png")}
      />

      <Image style={styles.seta} source={require("../assets/image/seta.png")} />

      <Text style={styles.txtsorvete}>
        Um clássico que combina a cremosidade do sorvete de baunilha com pedaços
        crocantes de chocolate, proporcionando uma explosão de sabores a cada
        colherada.
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
    backgroundColor: "burlywood",
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

  sorveteflocos: {
    width: "70%",
    height: "95%",
    left: 10,
    position: "absolute",
    top: "5%",
  },

  seta: {
    width: 450,
    height: 400,
    position: "absolute",
    top: "20%",
    left: "-0%",
  },

});
