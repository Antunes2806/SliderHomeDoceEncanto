// Import react-native
import { StyleSheet, Text, View, Image } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

// Import AntDesign
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>Sorvete de Cokies</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.sorvetecokie}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image style={styles.seta} source={require("../assets/image/seta.png")} />

      <Text style={styles.txtsorvete}>blablabla</Text>

      <Image
        style={styles.sorvete1}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image
        style={styles.sorvete2}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image
        style={styles.sorvete3}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image
        style={styles.sorvete4}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <Image
        style={styles.sorvete5}
        source={require("../assets/image/sorvetecokie.png")}
      />

      <View style={{ top: "55%", left: "10%" }}>
        <AntDesign name="hearto" size={30} color="black" />

        <Text style={styles.valor}> R$ 15,00</Text>

        <View style={{ bottom: "50%", left: "32%", top: "-55%" }}>
          <AntDesign name="shoppingcart" size={35} color="black" />
        </View>
      </View>
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
    width: "15%",
    height: "10%",
    left: "35%",
    top: "5%",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    transform: [{ rotate: "-90deg" }],
    top: "50%",
    right: "40%",
  },

  row: {
    width: "100%",
    height: 2,
    backgroundColor: "brown",
    zIndex: 5,
    position: "absolute",
    top: "60%",
    right: "35%",
    transform: [{ rotate: "-90deg" }],
  },

  sorvetecokie: {
    width: "100%",
    height: "100%",
    left: "10%",
    position: "absolute",
    top: "10%",
  },

  seta: {
    width: 450,
    height: 400,
    position: "absolute",
    top: "25%",
    left: "-0%",
  },

  sorvete1: {
    width: 150,
    height: 250,
    position: "absolute",
    left: "-10%",
  },

  sorvete2: {
    width: "15%",
    height: "15%",
    position: "absolute",
    top: "85%",
    right: "85%",
    transform: [{ rotate: "20deg" }],
  },

  sorvete3: {
    width: 150,
    height: 300,
    position: "absolute",
    top: "75%",
    left: "85%",
  },

  sorvete4: {
    width: "15%",
    height: "15%",
    position: "absolute",
    top: "20%",
    left: "90%",
    transform: [{ rotate: "-20deg" }],
  },

  sorvete5: {
    width: "15%",
    height: "15%",
    position: "absolute",
    left: "80%",
    top: "-5%",
    transform: [{ rotate: "-80deg" }],
  },

  txtsorvete: {
    fontSize: 30,
    position: "absolute",
    top: "60%",
    left: "65%",
    fontFamily: "Rokkitt",
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    position: "absolute",
    left: 40,
  },
});
