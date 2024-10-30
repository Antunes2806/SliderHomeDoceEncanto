import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { firestore } from "../services/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchFavorites = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "favorites"));
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

  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites();
    }, [])
  );

  const handleRemoveFavorite = async (id) => {
    try {
      const favoriteRef = doc(firestore, "favorites", id);
      await deleteDoc(favoriteRef);
      fetchFavorites();
    } catch (error) {
      console.error("Erro ao remover favorito: ", error);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < favorites.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  const renderCarouselItem = ({ item }) => {
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
        <View style={{ alignItems: "center", borderRadius: 20, padding: 10 }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 250,
              height: 450,
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
      <TouchableOpacity
        onPress={goToPrevious}
        disabled={currentIndex === 0}
        style={{
          position: "absolute",
          left: 20,
          top: "50%",
          transform: [{ translateY: -25 }],
          zIndex: 1,
        }}
      >
        <Icon
          name="chevron-left"
          size={40}
          color={currentIndex === 0 ? "#ccc" : "#000"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goToNext}
        disabled={currentIndex === favorites.length - 1}
        style={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: [{ translateY: -25 }],
          zIndex: 1,
        }}
      >
        <Icon
          name="chevron-right"
          size={40}
          color={currentIndex === favorites.length - 1 ? "#ccc" : "#000"}
        />
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favorites.length > 0 ? (
        <FlatList
          data={[favorites[currentIndex]]}
          renderItem={renderCarouselItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        />
      ) : (
        <Image
        style={{width: "100%", height: "100%",}}
        source={require("../assets/image/imgfav.png")} 
       
        />
      )}
    </View>
  );
}
