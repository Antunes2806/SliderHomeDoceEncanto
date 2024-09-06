import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ButtonComponent({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="arrowright" size={24} color="pink" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    left: "35%",
    bottom: "200%",
  },
});
