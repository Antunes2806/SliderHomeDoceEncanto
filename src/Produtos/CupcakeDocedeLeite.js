// Import react-native
import { StyleSheet, Text, View, Image } from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

// Import AntDesign
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CupcakeDocedeLeite() {
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/image/4.png")} />

      <Text style={styles.txt}>Cupcake de Doce de Leite</Text>
      <View style={styles.row}></View>

      <Image
        style={styles.cupcakededocedeleite}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Text style={styles.txtcupcake}>blablabla</Text>

      <Image
        style={styles.cupcake1}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Image
        style={styles.cupcake2}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Image
        style={styles.cupcake3}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Image
        style={styles.cupcake4}
        source={require("../assets/image/cupcakedl.png")}
      />

      <Image
        style={styles.cupcake5}
        source={require("../assets/image/cupcakedl.png")}
      />

      <View style={{ top: 450, right: "20%" }}>
        <AntDesign name="hearto" size={30} color="black" />

        <Text style={styles.valor}> 25,00 </Text>

        <View style={{ left: 200, top: -60 }}>
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

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "brown",
  },

  logo: {
    width: "15%",
    height: "15%",
    left: "40%",
    top: "5%",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "55%",
    textAlign: "center",
  },

  txtcupcake: {
    fontSize: 30,
    top: "45%",
    fontFamily: "Rokkitt",
  },

  cupcakededocedeleite: {
    width: 300,
    height: 500,
    position: "absolute",
    top: "20%",
  },

  cupcake1: {
    width: 100,
    height: 150,
    position: "absolute",
    right: "85%",
    transform: [{ rotate: "20deg" }],
    top: "5%",
  },

  cupcake2: {
    width: 85,
    height: 100,
    position: "absolute",
    top: "60%",
    right: "90%",
  },

  cupcake3: {
    width: 80,
    height: 110,
    position: "absolute",
    top: "20%",
    left: "89%",
  },

  cupcake4: {
    width: 80,
    height: 110,
    position: "absolute",
    top: "70%",
    left: "88%",
  },

  cupcake5: {
    width: 80,
    height: 110,
    position: "absolute",
    top: "90%",
    right: "85%",
    transform: [{ rotate: "5deg" }],
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    top: "-35%",
    left: "20%",
  },
});
