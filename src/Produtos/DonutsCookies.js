// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function DonutsCookies() {
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
        source={require("../assets/image/fundodntcke.png")}
      />

      <Text style={styles.txt}>DONUTS DE COOKIES</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.donutscookies}
        source={require("../assets/image/dntck.png")}
      />

      <Text style={styles.txtdonuts}>blablabla</Text>
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
    backgroundColor: "saddlebrown",
    position: "absolute",
    top: "22%",
  },

  logo: {
    width: "10%",
    height: "15%",
    left: "85%",
    position: "absolute",
    top: "10%",
  },

  txt: {
    fontSize: 30,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: "18%",
  },

  txtdonuts: {
    fontSize: 30,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
  },

  donutscookies: {
    width: 250,
    height: 380,
    position: "absolute",
    left: "20%",
    top: "20%",
  },

  fundo: {
    width: "100%",
    height: "100%",
  },
});
