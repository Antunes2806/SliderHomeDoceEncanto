// authService.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Importando as funções necessárias do banco de dados
import * as Google from "expo-auth-session/providers/google";
import { app } from "./firebase"; // Importação do arquivo de configuração do Firebase
import { Alert } from "react-native";

// Inicializar autenticação
const auth = getAuth(app);
const db = getDatabase(app); // Adiciona a inicialização do banco de dados

// Função de cadastro com email e senha
export const registerWithEmailAndPassword = async (
  email,
  password,
  nickname
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Armazenar o nickname no Realtime Database
    await set(ref(db, "users/" + user.uid), {
      nickname: nickname,
    });

    return { user, nickname };
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
      clientId: "<SEU_CLIENT_ID>", // Substitua pelo seu Client ID
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

// Função para obter o nickname do usuário após login
export const getNickname = async (userId) => {
  const userRef = ref(db, "users/" + userId);
  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    return snapshot.val().nickname;
  } else {
    throw new Error("Usuário não encontrado");
  }
};
