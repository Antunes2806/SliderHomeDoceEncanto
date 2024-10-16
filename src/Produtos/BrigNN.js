// Importa os componentes básicos do React Native para construção da interface
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Importa o useFonts para carregar fontes personalizadas
import { useFonts } from "expo-font";

// Importa hooks essenciais para navegação entre telas e gerenciamento de estado
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

// Importa categorias de produtos e a função que adiciona itens ao carrinho (Redux)
import { Categorias } from "../database/items";
import { addToCart } from "../../CartReducer";

// Importa ícones das bibliotecas de ícones do Expo
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

// Função principal que define a interface e a lógica da tela "Brigadeiro de Ninho com Nutela
export default function BrigNN() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  // Pega o item específico de "Donuts de Morango" e verifica se existe
  const item = Categorias[3]?.items.find((product) => product.id === "13");

  const handleAddToCart = () => {
    if (item) {
      // Envia uma ação para adicionar o item ao carrinho
      dispatch(addToCart(item));

      // Redireciona o usuário para a tela "Carrinho"
      navigation.navigate("Carrinho");
    } else {
      // Exibe um erro no console se o item não for encontrado
      console.error("Item não encontrado");
    }
  };

  // Se a fonte não estiver carregada, não renderiza nada (evita quebra visual)
  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundobrigninhnt.png")}
      />

      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>BRIGADEIRO DE NINHO COM NUTELA</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.brigadeironn}
        source={require("../assets/image/brigNN.png")}
      />

      <Text style={styles.txtbrigadeiro}>
        Uma combinação perfeita entre a cremosidade do leite Ninho e o recheio
        irresistível de Nutella, criando uma explosão de sabores a cada mordida!{" "}
      </Text>
      <View style={styles.elementos}>
        <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
          <AntDesign name="shoppingcart" size={55} color="black" />
        </TouchableOpacity>

        <Text style={styles.txtvalor}>$15,00</Text>

        <TouchableOpacity
          style={styles.heart}
          onPress={() => navigation.navigate("Favoritos")}
        >
          <EvilIcons name="heart" size={70} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "60%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "darkred", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "25%",
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "60%", // Largura do texto
    textAlign: "center", // Centraliza o texto
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "15%",
  },

  txtbrigadeiro: {
    fontSize: 20, // Tamanho do texto
    top: "65%",
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
    width: 300, // Largura do texto
  },

  brigadeironn: {
    width: 300, // Largura da imagem
    height: 400, // Altura imagem
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "20%",
  },

  fundo: {
    width: "100%", // Largura da imagem de fundo
    height: "100%", // Altura da imagem de fundo
  },

  elementos: {
    position: "absolute",
    left: 0, // Alinha a esquerda
    bottom: 90,
    height: 60, // Altura fixa
    width: "100%", // Largura fixa
    flexDirection: "row", // Disposição dos elementos em linha
    justifyContent: "space-evenly", // Espaço igual entre os elementos
    alignItems: "center",
  },

  txtvalor: {
    fontSize: 25, // Tamanho do
    fontWeight: "700", // Deixa o texto em negrito
  },

  seta: {
    position: "absolute", // Posição absoluta para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
