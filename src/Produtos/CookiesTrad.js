// Import react-native
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Import useFonts
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../services/firebase"; // Importe o Firestore
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function CookiesTrad() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Adiciona o estado para verificar se é favorito

  // Defina o item como o produto que você quer mostrar
  const itemfav = {
    id: "16", // Exemplo de ID do produto
    name: "Cookie Tradicional",
    valor: 15.0,
    description:
      " Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Inicializa o storage
        const imageRef = ref(storage, "brigtrad.png"); // Referência à imagem no Firebase Storage
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

  const navigation = useNavigation();
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundocoktrad.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>COOKIES TRADICIONAIS </Text>

      <View style={styles.row}></View>

      <Image
        style={styles.cookietradicional}
        source={require("../assets/image/cktrad.png")}
      />

      <Text style={styles.txtcookies}>
        Um sabor clássicos e irresistíveis, esses cookies são crocantes por fora
        e macios por dentro, proporcionando uma combinação perfeita de textura e
        sabor !
      </Text>
      <View style={styles.elementos}>
        <TouchableOpacity
          style={styles.car}
          onPress={() => navigation.navigate("Carrinho")}
        >
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
    flex: 1, // Ocupa a tela inteira
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "saddlebrown", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "17%",
  },

  txt: {
    fontSize: 30, // Tamanho da fonte
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "60%",
    textAlign: "center", // Centraliza o texto
    top: "10%",
    position: "absolute",
  },

  txtcookies: {
    fontSize: 20, // Tamanho da fonte
    fontFamily: "Rokkitt", // Fonte personalizada
    textAlign: "center", // Centraliza o texto
    width: 350, // Largura do texto
    top: "65%",
    position: "absolute",
  },

  cookietradicional: {
    width: 300, // Largura da imagem
    height: 500, // Altura da imagem
    top: "15%",
    position: "absolute",
  },

  fundo: {
    width: "100%", // Largura da imagem
    height: "100%", // Altura da imagem
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
    fontSize: 25, // Tamanho da fonte
    fontWeight: "700", // Deixa o texto em negrito
  },

  seta: {
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: 100,
    left: 10, // Alinha a esquerda
  },
});
