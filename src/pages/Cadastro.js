import React, { useState } from "react";
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
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/FontAwesome";
import { getFirestore, doc, setDoc } from "firebase/firestore";

WebBrowser.maybeCompleteAuthSession();

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState(""); // Estado para o apelido
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "<SEU_CLIENT_ID>",
    scopes: ["profile", "email"],
  });

  const handleSignUp = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Erro", "A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        nickname: nickname,
      });
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("ProdutosDrawer", { userId: user.uid });
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
      Alert.alert("Erro", "Não foi possível cadastrar. Tente novamente.");
    }
  };

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then(async (userCredential) => {
          const userId = userCredential.user.uid;
          Alert.alert("Sucesso", "Login com Google realizado com sucesso!");
          navigation.navigate("ProdutosDrawer", { userId }); // Passando userId
        })
        .catch((error) => {
          console.error("Erro ao fazer login com Google:", error.message);
          Alert.alert("Erro", "Não foi possível fazer login com Google.");
        });
    }
  }, [response]);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/fundologcad.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <Text style={styles.title}> Vamos criar sua conta!</Text>
          <Text style={styles.title2}>Apenas alguns passos para começar</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Apelido"
            value={nickname}
            onChangeText={setNickname} // Atualizando o apelido
          />
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

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirme sua Senha"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.bttCadastrar} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bttGoogle}
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
          style={styles.loginText}
          onPress={() => navigation.navigate("Login")}
        >
          Já tem uma conta? Entre
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
    fontSize: 15,
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
  loginText: {
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
  bttCadastrar: {
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
  bttGoogle: {
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

export default Cadastro;
