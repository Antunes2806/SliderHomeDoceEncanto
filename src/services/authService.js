// authService.js
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { app } from "./firebase"; // Importação do arquivo de configuração do Firebase
import { Alert } from "react-native";

// Inicializar autenticação
const auth = getAuth(app);

// Função de cadastro com email e senha
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao criar conta:", error.message);
    throw error;
  }
};

// Função para login com Google (usando expo-auth-session)
export const signInWithGoogle = async () => {
  try {
    // Configure o cliente OAuth do Google
    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: "<SEU_CLIENT_ID>",  // Substitua pelo seu Client ID
      scopes: ["profile", "email"],
    });

    // Execute o login
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      const userCredential = await signInWithCredential(auth, credential);
      return userCredential.user;
    } else {
      throw new Error("Erro no login com Google");
    }
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error.message);
    Alert.alert("Erro", "Não foi possível fazer login com Google.");
    throw error;
  }
};
