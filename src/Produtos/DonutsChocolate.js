// Import react-native
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

export default function DonutsChocolate() {
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
        source={require("../assets/image/fundodntchc.png")}
      />

      <Text style={styles.txt}>DONUTS DE CHOCOLATE</Text>

      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <View style={styles.row}></View>

      <Image
        style={styles.donutschocolate}
        source={require("../assets/image/dntchoc.png")}
      />

      <Text style={styles.txtdonuts}>
        {" "}
        Uma delícia intensa com cobertura cremosa de chocolate, perfeita para os
        amantes do doce, com massa macia que torna cada mordida irresistível !
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
    backgroundColor: "saddlebrown",
    position: "absolute",
    top: "25%",
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
    fontSize: 20,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 400,
  },

  donutschocolate: {
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
