// Login.js
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/FontAwesome"; // Importar a biblioteca de ícones

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth();

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

  const handleEmailPasswordLogin = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("ProdutosDrawer");
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error.message);
        Alert.alert(
          "Erro",
          "Não foi possível fazer login. Verifique suas credenciais."
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) de volta!</Text>
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
          style={styles.input} // Mantendo o mesmo estilo
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="Entrar" onPress={handleEmailPasswordLogin} />
      <Button title="Entrar com Google" onPress={() => promptAsync()} />
      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate("Cadastro")}
      >
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 12,
    width: '100%', // Definindo uma largura de 100% para o contêiner
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    width: '100%', // Definindo uma largura de 100% para o campo de entrada
  },
  registerText: {
    color: "blue",
    textAlign: "center",
    marginTop: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: '100%', // Definindo uma largura de 100% para o contêiner
  },
});

export default Login;
