// Importações do React Native
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";

// Importação da fonte personalizada
import { useFonts } from "expo-font";

// Navegação e ícones
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

// Hooks, Firebase e Redux
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../services/firebase"; // Importe o Firestore
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Categorias } from "../database/items";
import { useDispatch } from "react-redux";
import { addToCart } from "../../CartReducer";

// Firebase Auth
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default function CookiesTrad() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Adiciona o estado para verificar se é favorito
  const [showAlert, setShowAlert] = useState(false); // Para mostrar um alerta caso não esteja logado

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const item = Categorias[4]?.items.find((product) => product.id === "16");

  const itemfav = {
    id: "16", // Exemplo de ID do produto
    name: "Cookie Tradicional",
    valor: 18.0,
    description:
      "Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
      navigation.navigate("Carrinho");
    } else {
      console.error("Item não encontrado");
    }
  };

  // Carregamento da imagem do Firebase Storage
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, "cktrad.png");
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Erro ao carregar a imagem do Firebase Storage:", error);
      } finally {
        setLoading(false);
      }
    };

    // Função para verificar se o item está nos favoritos
    const checkFavoriteStatus = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const favoriteRef = doc(
            firestore,
            "users",
            currentUser.uid,
            "favorites",
            itemfav.id
          );
          const docSnap = await getDoc(favoriteRef);
          setIsFavorite(docSnap.exists());
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.error("Erro ao verificar favoritos: ", error);
      }
    };

    fetchImage();
    checkFavoriteStatus();
  }, []);

  // Função para adicionar/remover favoritos
  const handleToggleFavorite = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setShowAlert(true);
      return;
    }

    try {
      const favoriteRef = doc(
        firestore,
        "users",
        currentUser.uid,
        "favorites",
        itemfav.id
      );
      const docSnap = await getDoc(favoriteRef);

      if (docSnap.exists()) {
        await deleteDoc(favoriteRef); // Remove do favorito
        setIsFavorite(false); // Atualiza o estado
      } else {
        await setDoc(favoriteRef, {
          name: itemfav.name,
          valor: itemfav.valor,
          image: imageUrl, // Salva a URL da imagem no favorito
          description: itemfav.description,
        });
        setIsFavorite(true); // Atualiza o estado
      }

      navigation.navigate("Favoritos"); // Navega para a tela de favoritos
    } catch (error) {
      console.error("Erro ao modificar favoritos: ", error);
    }
  };

  // Carrega a fonte personalizada
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.fundo}
      source={require("../assets/image/cookietrad.png")}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.seta}
          onPress={() => navigation.navigate("Produtos")}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.txt}>COOKIE TRADICIONAL</Text>

        <View style={styles.row}></View>

        <Image
          style={styles.cookietradicional}
          source={
            imageUrl ? { uri: imageUrl } : require("../assets/image/cktrad.png")
          }
        />

        <Text style={styles.txtcookies}>
          Um sabor clássico e irresistível, esses cookies são crocantes por fora
          e macios por dentro, proporcionando uma combinação perfeita de textura
          e sabor!
        </Text>

        <View style={styles.elementos}>
          <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
            <AntDesign name="shoppingcart" size={55} color="black" />
          </TouchableOpacity>

          <Text style={styles.txtvalor}>$18,00</Text>

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

        {/* Modal de Alerta para Login */}
        <Modal
          transparent={true}
          visible={showAlert}
          animationType="fade"
          onRequestClose={() => setShowAlert(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.alertBox}>
              <Text style={styles.alertTitle}>Atenção!</Text>
              <Text style={styles.alertMessage}>
                Você precisa estar logado para favoritar um produto.
              </Text>
              <TouchableOpacity
                style={styles.alertButton}
                onPress={() => setShowAlert(false)}
              >
                <Text style={styles.alertButtonText}>Entendi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  row: {
    width: "70%",
    height: 2,
    backgroundColor: "saddlebrown",
    position: "absolute",
    top: "20%",
  },
  txt: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "70%",
    textAlign: "center",
    top: "17%",
    position: "absolute",
  },
  txtcookies: {
    fontSize: 20,
    fontFamily: "Rokkitt",
    textAlign: "center",
    width: 300,
    top: "65%",
    position: "absolute",
  },
  cookietradicional: {
    width: 300,
    height: 500,
    top: "15%",
    position: "absolute",
  },
  fundo: {
    width: "100%",
    height: "100%",
  },
  elementos: {
    position: "absolute",
    left: 0,
    bottom: 90,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txtvalor: {
    fontSize: 25,
    fontWeight: "700",
  },
  seta: {
    position: "absolute",
    top: 100,
    left: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ed8e8e",
  },
  alertMessage: {
    fontSize: 16,
    marginVertical: 10,
  },
  alertButton: {
    backgroundColor: "#ed8e8e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  alertButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
