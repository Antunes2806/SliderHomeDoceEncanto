import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";
import RoutesStack from "./RoutesStack";

import Ionicons from "@expo/vector-icons/Ionicons";
import Carrinho from "../pages/Carrinho";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      {/* Logo no topo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/image/4.png")} // Caminho para o logo
          style={styles.logo}
        />
      </View>
      {/* Itens padrão do Drawer */}
      <View style={{ flex: 1 }}>
        <Drawer.NavigatorItem {...props} />
      </View>
    </View>
  );
}

export default function RoutesDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: { backgroundColor: "white" },
        drawerActiveBackgroundColor: "#ed8e8e",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "white",
        drawerInactiveTintColor: "black",
        headerTitle: "", // Remove o título do cabeçalho
        headerLeft: () => (
          // Mantém o ícone de menu (hambúrguer) no lado esquerdo
          <Ionicons.Button
            name="menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()} // Abre o menu lateral
          />
        ),
      })}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={RoutesStack} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Favoritos" component={Favoritos} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
}
