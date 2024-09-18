import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font"; //importa a fonte

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
      <View
        style={{
          width: "100%",
          padding: 10,
          alignItems: "center",
          marginTop: 115,
          position: "absolute",
        }}
      >
        <Text style={styles.txt}>DONUTS DE PAÇOCA</Text>
        <View style={styles.row}></View>
      </View>

      <Image
        style={styles.donutschoc}
        source={require("../assets/image/dntpacoca.png")}
      />

      <Text style={styles.txtdonuts}>blablabla</Text>

      <Image
        style={styles.donuts1}
        source={require("../assets/image/dntpacoca.png")}
      />

      <Image
        style={styles.donuts2}
        source={require("../assets/image/dntpacoca.png")}
      />

      <Image
        style={styles.donuts3}
        source={require("../assets/image/dntpacoca.png")}
      />

      <Image
        style={styles.donuts4}
        source={require("../assets/image/dntpacoca.png")}
      />

      <Image
        style={styles.donuts5}
        source={require("../assets/image/dntpacoca.png")}
      />

      <View style={{ top: "10%", right: 100 }}>
        <AntDesign name="hearto" size={40} color="black" />

        <Text style={styles.valor}> R$ 15,00</Text>

        <View style={{ bottom: "50%", left: 200 }}>
          <AntDesign name="shoppingcart" size={50} color="black" />
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
    width: "10%",
    height: "10%",
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

  donutschoc: {
    width: 300,
    height: 450,
    top: "6%",
  },

  donuts1: {
    width: 200,
    height: 300,
    position: "absolute",
    top: -100,
    right: 280,
  },

  donuts2: {
    width: 100,
    height: 150,
    position: "absolute",
    top: "45%",
    right: 380,
  },

  donuts3: {
    width: 90,
    height: 100,
    position: "absolute",
    top: "90%",
    right: 380,
  },

  donuts4: {
    width: 100,
    height: 150,
    position: "absolute",
    top: "60%",
    left: 380,
  },

  donuts5: {
    width: 100,
    height: 150,
    position: "absolute",
    top: "90%",
    left: 360,
  },

  txtdonuts: {
    fontSize: 30,
    fontFamily: "Rokkitt",
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    position: "absolute",
    top: "10%",
    left: 80,
  },

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "black",
    zIndex: 5,
  },
});
