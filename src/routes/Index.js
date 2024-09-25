import * as React from "react";
import { View, Text, Image } from "react-native";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import Carrinho from "../pages/Carrinho";

// Componente Customizado para DrawerContent
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
          }} // Estilize conforme desejar
        />
        <Text style={{ marginTop: 10, fontSize: 18 }}>Bem-vindo!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function RoutesDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerStyle: { backgroundColor: "white" },
        drawerActiveBackgroundColor: "#ed8e8e",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "white",
        drawerInactiveTintColor: "black",
        headerTitle: "",
        headerLeft: () => (
          <Ionicons.Button
            name="menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
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
