import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
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

  return (
    <DrawerContentScrollView {...props}>
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
        <Text style={{ marginTop: 10, fontSize: 18 }}>Bem-vindo!</Text>
      </View>

      {/* Sempre exibe as rotas, independentemente de estar logado ou não */}
      <DrawerItemList {...props} />

      {isLogged ? (
        // Se o usuário estiver logado, exibe as opções de logout
        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Button title="Logout" onPress={logout} color="#ed8e8e" />
        </View>
      ) : (
        // Se o usuário não estiver logado, exibe os botões de login e cadastro
        <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ fontSize: 18, color: "#ed8e8e" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Cadastro")}
          >
            <Text style={{ fontSize: 18, color: "#ed8e8e", marginTop: 10 }}>
              Cadastro
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </DrawerContentScrollView>
  );
}

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
