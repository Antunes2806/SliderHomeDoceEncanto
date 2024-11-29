import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome"; // Para o ícone de visibilidade de senha
import { StatusBar } from "react-native";

const Cadastro = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const { setNickname } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmação de senha
  const [nickname, setNicknameInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para mostrar/ocultar confirmação de senha
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // State for modal message
  const [modalType, setModalType] = useState(""); // Type of modal: "success" or "error"
  const auth = getAuth();
  const db = getFirestore();

  const handleSignUp = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setModalMessage("Por favor, insira um email válido.");
      setModalType("error");
      setShowModal(true);
      return;
    }

    if (password.length < 6) {
      setModalMessage("A senha deve ter pelo menos 6 caracteres.");
      setModalType("error");
      setShowModal(true);
      return;
    }

    if (password !== confirmPassword) {
      setModalMessage("As senhas não coincidem.");
      setModalType("error");
      setShowModal(true);
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add nickname to Firestore
      await setDoc(doc(db, "users", user.uid), {
        nickname: nickname || "Novo Usuário",
      });

      // Set user nickname and log them in
      setNickname(nickname || "Novo Usuário");
      login(nickname || "Novo Usuário");

      setModalMessage("Cadastro realizado com sucesso! Bem-vindo!");
      setModalType("success");
      setShowModal(true);

      setTimeout(() => {
        navigation.navigate("ProdutosDrawer");
      }, 2000); // Navigate to ProdutosDrawer after 2 seconds
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
      setModalMessage("Não foi possível cadastrar. Tente novamente.");
      setModalType("error");
      setShowModal(true);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário já logado: ", user);
        navigation.navigate("ProdutosDrawer");
      }
    });

    return () => unsub();
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/image/fundologcad.png")}
      style={styles.background}
    >
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <Text style={styles.title}>Crie sua conta!</Text>
          <Text style={styles.title2}>Cadastre-se para começar.</Text>
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
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={nickname}
            onChangeText={setNicknameInput}
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
            <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirmar Senha"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon name={showConfirmPassword ? "eye" : "eye-slash"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.bttentrar}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate("Login")}
        >
          Já tem uma conta?{" "}
          <Text style={styles.registerTextLink}>Login</Text>
        </Text>
      </View>

      {/* Modal de Alerta para Cadastro */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>
              {modalType === "success" ? "Cadastro realizado!" : "Atenção!"}
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
  registerText: {
    color: "black",
    textAlign: "center",
    marginTop: 16,
  },
  registerTextLink: {
    color: "#ed8e8e",
    fontWeight: "bold",
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

export default Cadastro;
