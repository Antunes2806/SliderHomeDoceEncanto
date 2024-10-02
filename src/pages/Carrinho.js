import React from "react";

import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function Carrinho() {
  return (
    <View>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundocar1.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    width: "100%",
    height: "100%",
  },
});
