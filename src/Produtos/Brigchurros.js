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

// Função principal que define a interface e a lógica da tela "Brigadeiro de Churros"
export default function Brigchurros() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Adiciona o estado para verificar se é favorito

  // Defina o item como o produto que você quer mostrar
  const itemfav = {
    id: "15", // Exemplo de ID do produto
    name: "Brigadeiro Churros",
    valor: 15.0,
    description:
      " Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Inicializa o storage
        const imageRef = ref(storage, "brigchurros.png"); // Referência à imagem no Firebase Storage
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

  const dispatch = useDispatch(); // Hook do Redux para enviar ações
  const navigation = useNavigation(); // Hook para navegar entre telas

  // Carrega a fonte personalizada "Rokkitt". Se a fonte não carregar, retorna `false`.
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  // Busca o produto específico com ID 15 da categoria "Donuts de Morango"
  const item = Categorias[3]?.items.find((product) => product.id === "15");

  // Função que adiciona o item ao carrinho e navega para a tela do carrinho
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

  // Renderiza a interface da tela
  return (
    <View style={styles.container}>
      {/* Exibe uma imagem de fundo cobrindo toda a tela */}
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundobrigchurros.png")}
      />

      {/* Botão de navegação para voltar à tela de Produtos */}
      <TouchableOpacity
        style={styles.seta}
        key={item.id} // Chave única baseada no ID do item
        onPress={() => navigation.navigate("Produtos")} // Navega para "Produtos"
      >
        {/* Ícone de seta para indicar voltar */}
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      {/* Título do produto na tela */}
      <Text style={styles.txt}>BRIGADEIRO DE CHURROS</Text>

      {/* Linha decorativa abaixo do título */}
      <View style={styles.row}></View>

      {/* Imagem do brigadeiro de churros */}
      <Image
        style={styles.brigadeirochurros}
        source={require("../assets/image/brigchurros.png")}
      />

      {/* Texto descritivo sobre o produto */}
      <Text style={styles.txtbrigadeiro}>
        Inspirado na sobremesa tradicional, o brigadeiro de churros é envolto em
        açúcar e canela, com um recheio delicioso de doce de leite que remete ao
        sabor do famoso doce espanhol!
      </Text>

      {/* Área de interação com o carrinho e favoritos */}
      <View style={styles.elementos}>
        {/* Botão para adicionar o item ao carrinho */}
        <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
          <AntDesign name="shoppingcart" size={55} color="black" />
        </TouchableOpacity>

        {/* Exibe o valor do produto */}
        <Text style={styles.txtvalor}>$15,00</Text>

        {/* Botão para adicionar o item aos favoritos */}
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
    flex: 1, // Ocupa a tela inteira
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "brown", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "17%",
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "60%", // Largura do texto
    textAlign: "center", // Centraliza o texto
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "10%",
  },

  txtbrigadeiro: {
    fontSize: 20, // Tamanho do texto
    top: "65%",
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
    width: 300, // Largura do texto
  },

  brigadeirochurros: {
    width: 300, // Largura da imagem
    height: 400, // Altura da imagem
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "20%",
  },

  fundo: {
    width: "100%", // Largura da imagem de fundo
    height: "100%", // Altura da imagem de fundo
  },

  elementos: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    left: 0, // Alinha a esquerda
    bottom: 90,
    height: 60, // Altura fixa
    width: "100%", // Largura fixa
    flexDirection: "row", // Disposição dos elementos em linha
    justifyContent: "space-evenly", // Espaço igual entre os elementos
    alignItems: "center",
  },

  txtvalor: {
    fontSize: 25, // Tamanho do texto
    fontWeight: "700", // Deixa o texto em negrito
  },

  seta: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
