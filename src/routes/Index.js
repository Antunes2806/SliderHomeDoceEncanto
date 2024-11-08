import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";
import RoutesStack from "./RoutesStack";
import Carrinho from "../pages/Carrinho";
import { AuthContext } from "../../AuthProvider";

// Componente Customizado para DrawerContent com a imagem no topo
function CustomDrawerContent(props) {
  const { isLogged, logout } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir o modal de confirmação
  const confirmLogout = () => {
    setModalVisible(true);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 175,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("../assets/image/4.png")}
          style={{
            width: "100%",
            height: "80%",
            resizeMode: "cover",
          }}
        />
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
          Bem-vindo!
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View style={{ flex: 1 }} />

      {isLogged ? (
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={confirmLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.authContainer}>
          <Text style={styles.registerPrompt}>Não tem conta? Registre-se!</Text>
          <View style={styles.authButtons}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Cadastro")}
              style={styles.signupButton}
            >
              <Text style={styles.signupText}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Modal de confirmação de logout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Tem certeza?</Text>
            <Text style={styles.modalMessage}>
              Deseja mesmo sair da sua conta?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  logout();
                }}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmText}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}

// Estilos personalizados
const styles = StyleSheet.create({
  logoutContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    borderColor: "#ed8e8e",
    borderWidth: 2,
  },
  logoutText: {
    fontSize: 18,
    color: "#ed8e8e",
    fontWeight: "bold",
  },
  authContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  registerPrompt: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    fontStyle: "italic",
  },
  authButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#ed8e8e",
    borderWidth: 1.5,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  loginText: {
    fontSize: 16,
    color: "#ed8e8e",
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#ed8e8e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
  signupText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ed8e8e",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#ed8e8e",
    borderWidth: 1.5,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  cancelText: {
    fontSize: 16,
    color: "#ed8e8e",
    fontWeight: "bold",
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#ed8e8e",
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
  confirmText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

function CustomMenuIcon({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{
        position: "absolute",
        top: 40, // Ajuste conforme necessário
        left: 10,
        zIndex: 1, // Garante que o ícone fique acima dos outros elementos
      }}
    >
      <Ionicons name="menu" size={30} color="black" />
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomMenuIcon navigation={navigation} />
      <RoutesStack />
    </View>
  );
}

function SobreScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomMenuIcon navigation={navigation} />
      <Sobre />
    </View>
  );
}

function FavoritosScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomMenuIcon navigation={navigation} />
      <Favoritos />
    </View>
  );
}

function CarrinhoScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomMenuIcon navigation={navigation} />
      <Carrinho />
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function RoutesDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: "white" },
        drawerActiveBackgroundColor: "#ed8e8e",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "white",
        drawerInactiveTintColor: "black",
        headerShown: false, // Remove o header padrão
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Produtos} />
      <Drawer.Screen name="Sobre" component={SobreScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritosScreen} />
      <Drawer.Screen name="Carrinho" component={CarrinhoScreen} />
    </Drawer.Navigator>
  );
}
