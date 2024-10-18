import {
  StyleSheet,
  View,
  useWindowDimensions,
  ImageBackground,
} from "react-native";

export default OnboardingItem = ({ item, onPress, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%", // Define a largura da imagem 
    height: "100%", // Define a altura da imagem
    justifyContent: "flex-end",  // Alinha verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },
});
