import { StyleSheet, View, TouchableOpacity } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Home from "../pages/Home";

export default function ButtonComponent({ setStart }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setStart(true)}>
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
