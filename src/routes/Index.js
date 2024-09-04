import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

// Import Styles
import { styles } from "../styles/Styles";

// Import pages
import Carrinho from "../pages/Carrinho";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";
import Produtos from "../pages/Produtos";
import RoutesStack from "./RoutesStack";

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "4d2929",
        tabBarStyle: {
          backgroundColor: "#ff9bd0",
          bottom: "8%",
          height: 50,
          width: "80%",
          position: "absolute",
          right: 20,
          left: "9%",
          borderTopEndRadius: 30,
          borderBottomLeftRadius: 30,
          borderTopColor: "transparent",
          padding: 10,
          shadowColor: "#662520",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        },
      }}
    >
      {/* Componente Navigator do navegador tab.*/}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
          title: "",
        }}
        name="Produtos"
        component={Produtos}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="newspaper-o" size={size} color={color} />;
          },
          title: "",
        }}
        name="Sobre"
        component={Sobre}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            );
          },
          title: "",
        }}
        name="Carrinho"
        component={Carrinho}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="hearto" size={size} color={color} />;
          },
          title: "",
        }}
        name="Favoritos"
        component={Favoritos}
      />
    </Tab.Navigator>
  );
}
