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
import CarrinhoScreen from "../../screens/CarrinhoScreen";
import { CarrinhoProvider } from "../../contex/CarrinhoContext";

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#6a2042", // cor de quando clicamos no item
        tabBarInactiveTintColor: "#f5f3f3", //cor dos icones
        tabBarStyle: {
          backgroundColor: "#ed8e8e", // cor da barra
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
          shadowColor: "#f5f3f3",
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
        name="ProdutosTab"
        component={RoutesStack}
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

<Tab.Screen name="Carrinho">
        {() => (
          <CarrinhoProvider>
            <CarrinhoScreen />
          </CarrinhoProvider>
        )}
      </Tab.Screen>

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
