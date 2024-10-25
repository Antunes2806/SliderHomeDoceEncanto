import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  BackHandler,
} from "react-native";
import Slides from "../../Slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import ButtonComponent from "./ButtonComponent";
import LogCad from "../pages/LogCad"; // Tela de LogCad
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "../../store";
import Produtos from "../pages/Produtos";
import DonutsMorango from "../Produtos/DonutsMorango";
import CarrinhoFN from "../pages/CarrinhoFN";
import CarrinhoScreen from "../pages/Carrinho";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Sobre from "../pages/Sobre";
import Favoritos from "../pages/Favoritos";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  const handlePress = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // Navegar para LogCad quando o último slide for alcançado
      navigation.navigate("LogCad");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => (
            <OnboardingItem item={item} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <View style={styles.paginatorContainer}>
          <Paginator data={Slides} scrollX={scrollX} />
          <ButtonComponent onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

// Configuração do Drawer Navigator
const ProdutosDrawer = () => (
  <Drawer.Navigator initialRouteName="Produtos">
    <Drawer.Screen
      name="Produtos"
      component={Produtos}
      options={{ headerShown: false }}
    />
    <Drawer.Screen name="Sobre" component={Sobre} />
    <Drawer.Screen name="Favoritos" component={Favoritos} />
    <Drawer.Screen name="Carrinho" component={CarrinhoScreen} />
  </Drawer.Navigator>
);

// Configuração do Stack Navigator principal
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LogCad"
      component={LogCad}
      options={{ headerShown: false }}
    />
    {/* Adiciona o drawer como uma tela do stack */}
    <Stack.Screen
      name="ProdutosDrawer"
      component={ProdutosDrawer}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DonutsMorango"
      component={DonutsMorango}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Carrinho"
      component={CarrinhoScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CarrinhoFN"
      component={CarrinhoFN}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function MainApp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  paginatorContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
