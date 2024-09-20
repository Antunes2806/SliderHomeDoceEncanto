// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function DonutsMorango() {
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
        source={require("../assets/image/fundodntmor.png")}
      />

      <Text style={styles.txt}>DONUTS DE MORANGO</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.donutsmorango}
        source={require("../assets/image/donutsmorango.png")}
      />

      <Text style={styles.txtcupcake}>blablabla</Text>
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
    top: "22%",
  },

  logo: {
    width: "10%",
    height: "10%",
    left: "75%",
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
    top: "15%",
  },

  txtcupcake: {
    fontSize: 30,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
  },

  donutsmorango: {
    width: 550,
    height: 550,
    position: "absolute",
    left: "-18%",
    top: "25%",
  },

  fundo: {
    width: "100%",
    height: "100%",
  },
});
