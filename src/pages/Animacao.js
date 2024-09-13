import React, { useEffect, useState } from "react";
import { View, Animated } from "react-native";
import { stylesAnimacao } from "../styles/StylesAnimacao";

export default function Animacao({ setStart }) {
  const [fadeAnim] = useState(new Animated.Value(0)); // Valor inicial ajustado

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // Tempo de duração da animação
      useNativeDriver: true,
    }).start(() => {
      setStart(true); // Atualiza o estado para mostrar o componente Onboarding
    });
  }, [fadeAnim, setStart]);

  return (
    <View style={stylesAnimacao.container}>
      <Animated.Image
        style={[stylesAnimacao.logo, { opacity: fadeAnim }]}
        source={require("../assets/image/doceencanto.png")}
      />
    </View>
  );
}
