import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";
import { useDispatch } from "react-redux";
import { addToCart } from "../../CartReducer";
import { useNavigation } from "@react-navigation/native";
import { Categorias } from "../database/items";
import { auth } from "../services/firebase";

export default function DonutsMorango() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Estado para exibir alerta customizado
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const itemfav = {
    id: "0",
    name: "Donuts de Morango",
    valor: 14.5,
    description: "Um sabor fresco e doce com cobertura de morango.",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, "dnt.png");
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar a imagem do Firebase Storage:", error);
        setLoading(false);
      }
    };

    const checkFavoriteStatus = async () => {
      try {
        const favoriteRef = doc(firestore, "favorites", itemfav.id);
        const docSnap = await getDoc(favoriteRef);
        setIsFavorite(docSnap.exists());
      } catch (error) {
        console.error("Erro ao verificar favoritos: ", error);
      }
    };

    fetchImage();
    checkFavoriteStatus();
  }, []);

  const item = Categorias[0]?.items.find((product) => product.id === "0");
  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
      navigation.navigate("Carrinho");
    } else {
      console.error("Item não encontrado");
    }
  };

  const handleToggleFavorite = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setShowAlert(true); // Exibe o alerta customizado
      return;
    }

    try {
      // Acesse a subcoleção "favorites" do usuário logado
      const favoriteRef = doc(
        firestore,
        "users",
        currentUser.uid,
        "favorites",
        itemfav.id
      );
      const docSnap = await getDoc(favoriteRef);

      if (docSnap.exists()) {
        // Se o item já está nos favoritos, remove-o
        await deleteDoc(favoriteRef);
        setIsFavorite(false);
      } else {
        // Adiciona o item aos favoritos do usuário
        await setDoc(favoriteRef, {
          name: itemfav.name,
          valor: itemfav.valor,
          image: imageUrl,
          description: itemfav.description,
        });
        setIsFavorite(true);
      }

      navigation.navigate("Favoritos");
    } catch (error) {
      console.error("Erro ao modificar favoritos: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../assets/image/donutsmor.png")}
      />
      <TouchableOpacity
        style={styles.seta}
        onPress={() => navigation.navigate("Produtos")}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>DONUTS DE MORANGO</Text>

      <View style={styles.row}></View>

      <Image
        style={styles.donutsmorango}
        source={require("../assets/image/donutsmorango.png")}
      />

      <Text style={styles.txtdnt}>
        Um sabor fresco e doce, com cobertura de morango que combina
        perfeitamente com a massa fofinha, ideal para quem busca um sabor mais
        leve!
      </Text>

      <View style={styles.elementos}>
        <TouchableOpacity style={styles.car} onPress={handleAddToCart}>
          <AntDesign name="shoppingcart" size={45} color="black" />
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

      {/* Modal customizado para alerta */}
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
    alignItems: "center",
    position: "relative",
  },
  row: {
    width: "50%",
    height: 2,
    backgroundColor: "lightpink",
    position: "absolute",
    top: "22%",
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
  txtdnt: {
    fontSize: 20,
    fontFamily: "Rokkitt",
    position: "absolute",
    textAlign: "center",
    width: 350,
    top: "65%",
  },
  donutsmorango: {
    width: 600,
    height: 550,
    position: "absolute",
    top: "30%",
    right: "-15%",
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
    fontWeight: "bold",
  },
});
