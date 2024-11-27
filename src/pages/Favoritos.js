import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { firestore, auth } from "../services/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para buscar os favoritos do usuário logado
  const fetchFavorites = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.log("Usuário não está logado");
        return;
      }

      // Acessa a subcoleção de favoritos do usuário logado
      const favoritesRef = collection(
        firestore,
        "users",
        currentUser.uid,
        "favorites"
      );
      const querySnapshot = await getDocs(favoritesRef);
      const favItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFavorites(favItems);
    } catch (error) {
      console.error("Erro ao buscar favoritos: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Usando o useFocusEffect para chamar fetchFavorites sempre que a tela for focada
  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites();
    }, [])
  );

  // Função para remover um item dos favoritos
  const handleRemoveFavorite = async (id) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.log("Usuário não está logado");
        return;
      }

      // Remove da subcoleção de favoritos do usuário logado
      const favoriteRef = doc(
        firestore,
        "users",
        currentUser.uid,
        "favorites",
        id
      );
      await deleteDoc(favoriteRef);
      fetchFavorites(); // Atualiza a lista de favoritos após remover
    } catch (error) {
      console.error("Erro ao remover favorito: ", error);
    }
  };

  // Função para ir para o item anterior no carrossel
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Função para ir para o item seguinte no carrossel
  const goToNext = () => {
    if (currentIndex < favorites.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Carregamento de fontes personalizadas
  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  // Renderização de cada item no carrossel de favoritos
  const renderCarouselItem = ({ item, index }) => {
    const price = typeof item.valor === "number" ? item.valor : 0;

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "League",
            textAlign: "center",
            width: 300,
          }}
        >
          AQUI ESTÃO SEUS PRODUTOS FAVORITOS!
        </Text>
        <View style={{ alignItems: "center", borderRadius: 20, padding: 10, width: 400, height: 580,}}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 250,
              height: 480,
              borderRadius: 30,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 25, fontFamily: "League" }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "#000",
              fontFamily: "League",
              top: 10,
            }}
          >
            R$ {price.toFixed(2)}
          </Text>
          <View
            style={{
              backgroundColor: "#ed8e8e",
              borderRadius: 50,
              width: 83,
              height: 30,
              top: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
              <Text
                style={{ fontSize: 18, fontFamily: "League", color: "white" }}
              >
                REMOVER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F3F3",
      }}
    >
      {/* Imagem de fundo */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          source={{
            uri: favorites[currentIndex]?.image || "",
          }}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.5, // Ajuste a opacidade conforme necessário
          }}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderCarouselItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const index = Math.floor(contentOffsetX / 250); // Ajuste conforme a largura do item
            setCurrentIndex(index);
          }}
        />
      ) : (
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/image/imgfav.png")}
        />
      )}
    </View>
  );
}
