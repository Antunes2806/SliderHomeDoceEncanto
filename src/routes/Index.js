import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";
import CarrinhoScreen from "../../screens/CarrinhoScreen";
import RoutesStack from "./RoutesStack";

import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function RoutesDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{
          headerShown: false,
          
        }}
        name="Home"
        component={RoutesStack}
      />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Favoritos" component={Favoritos} />
      <Drawer.Screen name="Carrinho" component={CarrinhoScreen} />
    </Drawer.Navigator>
  );
}
