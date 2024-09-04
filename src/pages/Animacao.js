import React, { useEffect, useState } from "react";
import { View, Animated } from "react-native";
import { stylesAnimacao } from "../styles/StylesAnimacao";

export default function Animacao(setStart = { setStart }) {
  const [fadeAnim] = useState(new Animated.Value(-1)); // Valor inicial ajustado

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      setStart = { setStart };
    });
  }, []);

  return (
    <View style={stylesAnimacao.container}>
      <Animated.Image
        style={[stylesAnimacao.logo, { opacity: fadeAnim }]}
        source={require("../assets/image/doceencanto.png")}
      />
    </View>
  );
}
