import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../CartReducer";
import { Categorias } from "../database/items";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "../services/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function CookiesBranco() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const itemfav = {
    id: "17",
    name: "Cookie chocolate branco",
    valor: 15.0,
    description:
      "Uma delícia que mistura sorvete cremoso com pedaços crocantes de cookies",
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, "ckbranco.png");
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar a imagem do Firebase Storage:", error);
        setLoading(false);
      }
    };

    const checkFavoriteStatus = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const favoriteRef = doc(
            firestore,
            "users",
            currentUser.uid,
            "favorites",
            itemfav.id
          );
          const docSnap = await getDoc(favoriteRef);
          setIsFavorite(docSnap.exists());
        } catch (error) {
          console.error("Erro ao verificar favoritos: ", error);
        }
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

  const handleAddToCart = () => {
    const item = Categorias[4]?.items.find((product) => product.id === "17");
    if (item) {
      dispatch(addToCart(item));
      navigation.navigate("Carrinho");
    } else {
      console.error("Item não encontrado");
    }
  };

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) return null;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/cookiechocbranc.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>COOKIES DE CHOCOLATE BRANCO</Text>
      <View style={styles.row}></View>
      <Image style={styles.cookiebranco} source={{ uri: imageUrl }} />
      <Text style={styles.txtcookies}>
        Com pedaços generosos de chocolate branco derretido, esses cookies são
        uma opção doce e cremosa, que derrete na boca e encanta os amantes de
        chocolate!
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
  txt: {
    fontSize: 28,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: "10%",
    color: "#333",
  },
  txtcookies: {
    fontSize: 18,
    top: "65%",
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 300,
    color: "#555",
  },
  cookiebranco: {
    width: 300,
    height: 450,
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
    color: "#333",
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ed8e8e",
    borderRadius: 5,
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
