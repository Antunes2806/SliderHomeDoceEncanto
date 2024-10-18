import React, { useEffect, useState } from "react";
import { View, Animated } from "react-native";
import { stylesAnimacao } from "../styles/StylesAnimacao";

export default function Animacao({ setStart }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      setStart(true);
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
