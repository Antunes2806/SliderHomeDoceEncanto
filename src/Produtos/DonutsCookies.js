// Import react-native
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Categorias } from "../database/items";
import { addToCart } from "../../CartReducer";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../services/firebase"; // Importe o Firestore
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function DonutsCookies() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Adiciona o estado para verificar se é favorito

  // Defina o item como o produto que você quer mostrar
  const itemfav = {
    id: "3", // Exemplo de ID do produto
    name: "Donuts de Cookies",
    valor: 14.5,
    description:
      " Um sabor que combina com a maciez do donut com o crocante dos pedaços de cookies",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Inicializa o storage
        const imageRef = ref(storage, "dntck.png"); // Referência à imagem no Firebase Storage
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

  const item = Categorias[0]?.items.find((product) => product.id === "3");

  const handleAddToCart = () => {
    if (item) {
      // Verifica se o item não é undefined
      dispatch(addToCart(item));
      navigation.navigate("Carrinho"); // Navega para o carrinho
    } else {
      console.error("Item não encontrado");
    }
  };
  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/fundodntcke.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>DONUTS DE COOKIES</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.donutscookies}
        source={require("../assets/image/dntck.png")}
      />

      <Text style={styles.txtdonuts}>
        Um sabor que combina com a maciez do donut com o crocante dos pedaços de
        cookies, criando uma sobremesa cheia de textura e sabor!
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
    flex: 1, // Ocupa a tela inteira
    alignItems: "center",
    position: "relative",
  },

  row: {
    width: "50%", // Largura da linha
    height: 2, // Grossura da linha
    backgroundColor: "saddlebrown", // Cor da linha
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "22%",
  },

  txt: {
    fontSize: 30, // Tamanho do texto
    fontFamily: "Rokkitt", // Fonte personalizada
    zIndex: 5, // Garante que o texto fique na frente de outros elementos
    width: "60%", // Largura do texto
    textAlign: "center", // Centraliza o texto
    position: "absolute", // Posicionamento absoluto para controle preciso
    top: "18%",
  },

  txtdonuts: {
    fontSize: 20, // Tamanho do texto
    top: "65%",
    fontFamily: "Rokkitt", // Fonte personalizada
    position: "absolute", // Posicionamento absoluto para controle preciso
    textAlign: "center", // Centraliza o texto
    width: 400, // Largura do texto
  },

  donutscookies: {
    width: 250, // Largura da imagem
    height: 380, // Altura da imagem
    position: "absolute", // Posicionamento absoluto para controle preciso
    left: "20%", // Alinha a esquerda
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
