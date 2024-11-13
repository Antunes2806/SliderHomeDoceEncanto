import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export default function Finalizado() {
    const navigation = useNavigation();
  
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/image/comprafinalizada.png")}
                style={styles.background}
            >
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Produtos")}
                >
                    <AntDesign name="left" size={28} color="black" />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
  },
});
