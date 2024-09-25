// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function SorvetePistache() {
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
        source={require("../assets/image/fundosvtpst.png")}
      />

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>SORVETE DE PISTACHE</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.sorvetepistache}
        source={require("../assets/image/svtpistache.png")}
      />

      <Image style={styles.seta} source={require("../assets/image/seta.png")} />

      <Text style={styles.txtsorvete}>Um sabor sofisticado feito com pistaches selecionados, oferecendo um gosto marcante e uma textura aveludada que encanta todos paladares !</Text>
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
    width: "70%",
    textAlign: "center",
    transform: [{ rotate: "-90deg" }],
    top: "50%",
    right: "55%",
    position: "absolute",
  },

  row: {
    width: "75%",
    height: 2,
    backgroundColor: "lightgreen",
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

  sorvetepistache: {
      width: "85%",
      height: "100%",
      right: 60,
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
