import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  Text,
  Easing,
  Dimensions,
  StyleSheet,
} from "react-native";

import { stylesProdutos } from "../styles/StylesProdutos";
import TxtComponent from "../Components/TxtComponents";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Produtos() {
  const widthAnim = useRef(new Animated.Value(0)).current; // Largura inicial 0

  useEffect(() => {
    const { width } = Dimensions.get("window"); // Obtém a largura da tela

    Animated.timing(widthAnim, {
      toValue: width, // Posição final com largura total
      duration: 1500, // Duração da animação em milissegundos
      easing: Easing.out(Easing.ease), // Efeito de easing
      useNativeDriver: false, // Precisa ser false porque width não é suportado pelo native driver
    }).start(); // Corrigido para chamar start como função
  }, [widthAnim]);

  return (
    <Animated.View
      style={[
        styles.viewBtnModal,
        {
          width: widthAnim, // Largura animada da View
        },
      ]}
    >
      <View style={stylesProdutos.headerprdt}>
        <View style={stylesProdutos.icon}>
          <Ionicons name="location" size={24} color="black" />
          <View style={stylesProdutos.titulo}>
            <TxtComponent txt="Produtos" />
            </View>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  viewBtnModal: {
    flex: 1,
    height: "100%", // Garante que a altura da View seja 100%
    width: "100%",
    backgroundColor: "pink", // Define a cor de fundo
    borderRadius: 10, // Adiciona bordas arredondadas
    overflow: "hidden", // Garante que o conteúdo não exceda os limites da View
  },
});
