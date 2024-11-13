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
import { firestore } from "../services/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Categorias } from "../database/items";
import { useDispatch } from "react-redux";
import { addToCart } from "../../CartReducer";

// Firebase Auth
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default function CookiesDuo() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Carrega a fonte personalizada
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });
  if (!font) return null;

  // Produto selecionado
  const item = Categorias[4]?.items.find((product) => product.id === "19");

  const itemfav = {
    id: "14",
    name: "Cookie chocolate branco",
    valor: 15.0,
    description:
      "Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
      navigation.navigate("Carrinho");
    } else {
      console.error("Item não encontrado");
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, "ckduo.png");
        const url = await getDownloadURL(imageRef);
        console.log("URL da imagem:", url); // Verifique se a URL da imagem está sendo carregada corretamente
        setImageUrl(url);
      } catch (error) {
        console.error("Erro ao carregar a imagem do Firebase Storage:", error);
      } finally {
        setLoading(false);
      }
    };

    const checkFavoriteStatus = async () => {
      try {
        const currentUser = auth.currentUser;
        console.log("Usuário atual:", currentUser); // Verifique o estado do usuário logado
        if (currentUser) {
          const favoriteRef = doc(firestore, "users", currentUser.uid, "favorites", itemfav.id);
          const docSnap = await getDoc(favoriteRef);
          setIsFavorite(docSnap.exists());
        } else {
          console.log("Usuário não está logado");
          setIsFavorite(false);
        }
      } catch (error) {
        console.error("Erro ao verificar favoritos:", error);
      }
    };

    fetchImage();
    checkFavoriteStatus();
  }, []);

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
        await deleteDoc(favoriteRef);
        setIsFavorite(false);
      } else {
        await setDoc(favoriteRef, {
          name: itemfav.name,
          valor: itemfav.valor,
          image: imageUrl,
          description: itemfav.description,
        });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erro ao modificar favoritos:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/cookieduo.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>COOKIE MISTO</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.cookieduo}
        source={imageUrl ? { uri: imageUrl } : require("../assets/image/ckduo.png")}
      />

      <Text style={styles.txtcookies}>
        Uma deliciosa mistura que combina diversos ingredientes, como pedaços de
        chocolate ao leite, chocolate branco e nozes, criando uma explosão de
        sabores a cada mordida!
      </Text>

      <View style={styles.elementos}>
        <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
          <AntDesign name="shoppingcart" size={55} color="black" />
        </TouchableOpacity>

        <Text style={styles.txtvalor}>$15,00</Text>

        <TouchableOpacity style={styles.heart} onPress={handleToggleFavorite}>
          {isFavorite ? (
            <AntDesign name="heart" size={35} color="black" />
          ) : (
            <EvilIcons name="heart" size={55} color="black" />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  row: {
    width: "50%",
    height: 2,
    backgroundColor: "wheat",
    position: "absolute",
    top: "18%",
  },
  txt: {
    fontSize: 30,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: "15%",
  },
  txtcookies: {
    fontSize: 20,
    top: "70%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 350,
  },
  cookieduo: {
    width: 300,
    height: 400,
    position: "absolute",
    top: "20%",
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
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    elevation: 3,
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
    elevation: 5,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ed8e8e",
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
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
