import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/FontAwesome";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../AuthProvider";
import { StatusBar } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const { setNickname } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // State for modal message
  const [modalType, setModalType] = useState(""); // Type of modal: "success" or "error"

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
          setModalMessage(
            "Bem-vindo de volta! Estamos felizes em tê-lo de volta!"
          );
          setModalType("success");
          setShowModal(true); // Exibe o modal de sucesso
          setTimeout(() => {
            navigation.navigate("ProdutosDrawer");
          }, 2000); // Aguarda 2 segundos antes de navegar
        })
        .catch((error) => {
          setModalMessage(
            "Não foi possível fazer login com Google. Tente novamente."
          );
          setModalType("error");
          setShowModal(true); // Exibe o modal de erro
          console.error("Erro ao fazer login com Google:", error.message);
        });
    }
  }, [response]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("TEM USUÁRIO LOGADO! xx");
        console.log(user);
      }
    });
  }, []);

  const handleEmailPasswordLogin = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setModalMessage("Por favor, insira um email válido.");
      setModalType("error");
      setShowModal(true); // Exibe o modal de erro
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = doc(db, "users", user.uid);
      const snapshot = await getDoc(userDoc);

      if (snapshot.exists()) {
        const nickname = snapshot.data().nickname || "novo usuário";
        setNickname(nickname);

        login(nickname);

        setModalMessage(
          `Agora, é só escolher os doces que vão adoçar o seu dia!`
        );
        setModalType("success");
        setShowModal(true); // Exibe o modal de sucesso
        setTimeout(() => {
          navigation.navigate("ProdutosDrawer");
        }, 2000); // Aguarda 2 segundos antes de navegar
      } else {
        setModalMessage("Usuário não encontrado.");
        setModalType("error");
        setShowModal(true); // Exibe o modal de erro
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      setModalMessage(
        "Não foi possível fazer login. Verifique suas credenciais."
      );
      setModalType("error");
      setShowModal(true); // Exibe o modal de erro
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/fundologcad.png")}
      style={styles.background}
    >
      <StatusBar />
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
          Não tem uma conta?{" "}
          <Text style={styles.registerTextLink}>Cadastre-se</Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.recoverPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Alerta para Login */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>
              {modalType === "success"
                ? "Login realizado com sucesso!"
                : "Atenção!"}
            </Text>
            <Text style={styles.alertMessage}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.alertButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  registerTextLink: {
    color: "#ed8e8e", // Cor rosa para o "Cadastre-se"
    fontWeight: "bold",
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
  recoverPasswordText: {
    color: "#ed8e8e", // Cor rosa para o texto de recuperação
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },

  // Styles for Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: 300,
    alignItems: "center",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: "#ed8e8e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
