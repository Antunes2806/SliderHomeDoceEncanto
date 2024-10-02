import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";
import RoutesStack from "./RoutesStack";
import Carrinho from "../pages/Carrinho";

// Componente Customizado para DrawerContent com a imagem no topo
function CustomDrawerContent(props) {
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
          source={require("../assets/image/4.png")} // Coloque o link ou use require para imagem local
          style={{
            width: "100%",
            height: "80%",
            resizeMode: "cover",
          }}
        />
        <Text style={{ marginTop: 10, fontSize: 18 }}>Bem-vindo!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Ícone de menu fixo com header transparente
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
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Inclui a imagem no Drawer
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
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Sobre" component={SobreScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritosScreen} />
      <Drawer.Screen name="Carrinho" component={CarrinhoScreen} />
    </Drawer.Navigator>
  );
}
