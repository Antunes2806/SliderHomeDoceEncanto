import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {

         // Define o intervalo de entrada (inputRange) para cada ponto, com base na posição de rolagem
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        // Anima a largura do ponto com base na rolagem
        const dotWidth = scrollX.interpolate({
          inputRange, // Intervalo de rolagem
          outputRange: [10, 20, 10], // Define a largura do ponto em diferentes estados
          extrapolate: "clamp", // Garante que os valores não extrapolem o intervalo
        });

        // Anima a opacidade do ponto com base na rolagem
        const opacity = scrollX.interpolate({
          inputRange, // Intervalo de rolagem
          outputRange: [0.3, 1, 0.3], // Define a opacidade em diferentes estados
          extrapolate: "clamp", // Impede que a opacidade ultrapasse os limites definidos
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}  // Aplica os estilos e animações
            key={i.toString()}   // Define uma chave única para cada ponto
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10, // Define a altura
    borderRadius: 5, // Deixa as bordas arredondadas
    backgroundColor: "pink", // Define a cor de fundo
    marginHorizontal: 8, // Espaçamento horizontal
  },
});
