// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function CookiesDuo() {
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
        source={require("../assets/image/fundocokmisto.png")}
      />

      <Text style={styles.txt}>COOKIE MISTO </Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.cookieduo}
        source={require("../assets/image/ckduo.png")}
      />

      <Text style={styles.txtcookies}>blablabla</Text>
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
    backgroundColor: "wheat",
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

  txtcookies: {
    fontSize: 30,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
  },

  cookieduo: {
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
