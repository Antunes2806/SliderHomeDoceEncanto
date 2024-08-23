import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  Text,
  Easing,
  Dimensions,
  StyleSheet,
} from "react-native";

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
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Animated.View
        style={[
          styles.viewBtnModal,
          {
            width: widthAnim, // Largura animada da View
          },
        ]}
      >
        <Text>pagina produtos</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBtnModal: {
    height: "100%", // Garante que a altura da View seja 100%
    backgroundColor: "white", // Define a cor de fundo
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    borderRadius: 10, // Adiciona bordas arredondadas
    padding: 20, // Adiciona preenchimento interno
    overflow: "hidden", // Garante que o conteúdo não exceda os limites da View
  },
});
