// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function CookiesBranco() {
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

      <Text style={styles.txt}>COOKIES DE CHOCOLATE BRANCO</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.cookiebranco}
        source={require("../assets/image/ckbranco.png")}
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
    backgroundColor: "peachpuff",
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

  cookiebranco: {
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
