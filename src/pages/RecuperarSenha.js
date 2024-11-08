import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const handleRecuperarSenha = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    try {
      // Envia o link de recuperação de senha para o e-mail
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Sucesso!",
        "Um link de redefinição de senha foi enviado para seu e-mail."
      );
      navigation.navigate("Login"); // Redirecionando para a tela de Login após enviar o link
    } catch (error) {
      console.error("Erro ao enviar o link de redefinição:", error.message);
      if (error.code === "auth/user-not-found") {
        Alert.alert("Erro", "Email não encontrado.");
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível enviar o link de redefinição. Tente novamente."
        );
      }
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/fundologcad.png")} // Coloque o caminho da sua imagem de fundo aqui
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>
          Insira seu e-mail abaixo para receber um link de redefinição de senha.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleRecuperarSenha}>
          <Text style={styles.buttonText}>Enviar Link</Text>
        </TouchableOpacity>

        <Text style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Lembrei minha senha, </Text>
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            fazer login!
          </Text>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  button: {
    backgroundColor: "#ed8e8e",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginTop: 10,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginTextContainer: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  loginText: {
    color: "black",
  },
  loginLink: {
    color: "#ed8e8e", // Apenas "fazer login!" em rosa
  },
});

export default RecuperarSenha;
