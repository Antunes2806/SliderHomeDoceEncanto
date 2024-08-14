import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Sobre from "../pages/Sobre";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles/Styles";

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
          tabBarActiveTintColor: "#ff9db0",
        tabBarInactiveTintColor: "4d2929",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 50,
          position: "absolute",
          bottom: 20,
          right: 20,
          left: 20,
          borderTopEndRadius: 15,
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
            return < FontAwesome style={styles.btn} size={size} color={color} name="home" />;
          },
          title: "",
        }}
        name="HomeScreen"
        component={Home}
        
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="newspaper-o" size={size} color={color}  style={styles.btn}/>;
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
              <MaterialIcons   style={styles.btn} name="shopping-cart" size={size} color={color} />
            );
          },
          title: "",
        }}
        name="Carrinho"
        component={Carrinho}
      
      />
    </Tab.Navigator>
  );
}