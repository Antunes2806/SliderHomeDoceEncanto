import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/FontAwesome";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importando Firestore


WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth();
  const db = getFirestore(); // Inicializando Firestore

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "<SEU_CLIENT_ID>",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert("Sucesso", "Login com Google realizado com sucesso!");
          navigation.navigate("ProdutosDrawer");
        })
        .catch((error) => {
          console.error("Erro ao fazer login com Google:", error.message);
          Alert.alert("Erro", "Não foi possível fazer login com Google.");
        });
    }
  }, [response]);

  const handleEmailPasswordLogin = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Buscar o nickname do usuário no Firestore
      const userDoc = doc(db, "users", user.uid); // Caminho onde os dados do usuário estão
      const snapshot = await getDoc(userDoc);

      if (snapshot.exists()) {
        const nickname = snapshot.data().nickname || "novo usuário";
        Alert.alert("Sucesso", `Olá, ${nickname}!`);

        // Passando o nickname para a página de produtos
        navigation.navigate("ProdutosDrawer", { nickname });
      } else {
        Alert.alert("Erro", "Usuário não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      Alert.alert(
        "Erro",
        "Não foi possível fazer login. Verifique suas credenciais."
      );
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/fundologcad.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <Text style={styles.title}>Bem-vindo(a) de volta!</Text>
          <Text style={styles.title2}>Faça login para continuar!</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.bttentrar}
          onPress={handleEmailPasswordLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bttgoogle}
          onPress={() => promptAsync()}
        >
          <View style={styles.googleButtonContent}>
            <Image
              style={styles.Googlelogo}
              source={require("../assets/image/googlelogo.png")}
            />
            <Text style={styles.buttonTextG}>Entrar com Google</Text>
          </View>
        </TouchableOpacity>

        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Não tem uma conta? Cadastre-se
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  viewtitle: {
    alignItems: "center",
    bottom: 50,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
  },
  title2: {
    fontSize: 20,
    color: "gray",
  },
  inputContainer: {
    marginBottom: 12,
    width: "90%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  registerText: {
    color: "black",
    textAlign: "center",
    marginTop: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  iconContainer: {
    padding: 5,
  },
  bttentrar: {
    backgroundColor: "#ed8e8e",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    alignItems: "center",
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bttgoogle: {
    borderColor: "#ed8e8e",
    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 50,
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Googlelogo: {
    width: 40,
    height: 40,
    bottom: 5,
  },
  buttonTextG: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
