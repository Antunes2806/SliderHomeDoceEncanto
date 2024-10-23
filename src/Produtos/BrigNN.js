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

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../services/firebase"; // Importe o Firestore
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Função principal que define a interface e a lógica da tela "Brigadeiro de Ninho com Nutela
export default function BrigNN() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Adiciona o estado para verificar se é favorito

  // Defina o item como o produto que você quer mostrar
  const itemfav = {
    id: "13", // Exemplo de ID do produto
    name: "Brigadeiro Ninho com Nutela",
    valor: 15.0,
    description:
      " Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Inicializa o storage
        const imageRef = ref(storage, "brigNN.png"); // Referência à imagem no Firebase Storage
        const url = await getDownloadURL(imageRef); // Obtém a URL da imagem
        setImageUrl(url); // Armazena a URL da imagem no estado
        setLoading(false); // Para o carregamento
      } catch (error) {
        console.error("Erro ao carregar a imagem do Firebase Storage:", error);
        setLoading(false);
      }
    };

    const checkFavoriteStatus = async () => {
      try {
        const favoriteRef = doc(firestore, "favorites", itemfav.id);
        const docSnap = await getDoc(favoriteRef);
        setIsFavorite(docSnap.exists()); // Atualiza o estado se o item está nos favoritos
      } catch (error) {
        console.error("Erro ao verificar favoritos: ", error);
      }
    };

    fetchImage(); // Busca a imagem ao carregar o componente
    checkFavoriteStatus(); // Verifica o status do favorito ao carregar o componente
  }, []);

  const handleToggleFavorite = async () => {
    try {
      const favoriteRef = doc(firestore, "favorites", itemfav.id);
      const docSnap = await getDoc(favoriteRef);

      if (docSnap.exists()) {
        // Se o item já existe nos favoritos, remove
        await deleteDoc(favoriteRef);
        setIsFavorite(false); // Atualiza o estado
      } else {
        // Adiciona o item aos favoritos com a URL da imagem
        await setDoc(favoriteRef, {
          name: itemfav.name,
          valor: itemfav.valor,
          image: imageUrl, // Adiciona a URL da imagem
          description: itemfav.description,
        });
        setIsFavorite(true); // Atualiza o estado
      }

      navigation.navigate("Favoritos"); // Navega para a tela de favoritos
    } catch (error) {
      console.error("Erro ao modificar favoritos: ", error);
    }
  };

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
          onPress={handleToggleFavorite} // Chama a função de favoritar ao clicar
        >
          {isFavorite ? (
            <AntDesign name="heart" size={35} color="black" /> // Coração preenchido
          ) : (
            <EvilIcons name="heart" size={55} color="black" /> // Coração vazio
          )}
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
