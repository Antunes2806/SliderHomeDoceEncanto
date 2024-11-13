import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../AuthProvider"; // Importando o contexto
import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function LogCad() {
  const navigation = useNavigation();
  const { enterWithoutLogin } = useContext(AuthContext); // Acessando a função do contexto

  const [font] = useFonts({
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  const handleEnterWithoutLogin = () => {
    enterWithoutLogin(); // Atualiza o estado para não logado
    navigation.navigate("ProdutosDrawer"); // Navega para a tela do Drawer
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/imgLogCad.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/image/4.png")}
          />
          <Text style={styles.title}>Doce Encanto</Text>
        </View>

        <Text style={{ fontSize: 30, top: 30 }}>
          Faça login ou cadastre-se para descobrir suas delícias favoritas
        </Text>

        <View
          style={{
            backgroundColor: "#ed8e8e",
            width: "70%",
            height: 2,
            top: 20,
          }}
        ></View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCD}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonTextCD}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLG}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextLG}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleEnterWithoutLogin}>
            <Text style={styles.buttonTextPD}>Entrar sem login</Text>
          </TouchableOpacity>
  
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
    textAlign: "center",
    bottom: 110,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
  },
  buttonCD: {
    backgroundColor: "#ed8e8e",
    paddingVertical: 10,
    borderRadius: 50,
    marginVertical: 10,
    width: "50%",
    height: 50,
    bottom: 10,
  },
  buttonTextCD: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextLG: {
    color: "#ed8e8e",
    fontSize: 30,
    bottom: 20,
  },
  buttonTextPD: {
    color: "#ed8e8e",
    fontSize:18,
    bottom:20,
    right:15,
  },
  skipContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
