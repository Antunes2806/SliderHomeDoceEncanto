import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/Styles";
import { firestore } from "../services/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native"; // Importando useFocusEffect

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

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
      fetchFavorites(); // Fetch favorites whenever the screen is focused
    }, [])
  );

  const handleRemoveFavorite = async (id) => {
    try {
      const favoriteRef = doc(firestore, "favorites", id);
      await deleteDoc(favoriteRef);
      console.log("Produto removido dos favoritos");
      fetchFavorites(); // Atualiza a lista após remoção
    } catch (error) {
      console.error("Erro ao remover favorito: ", error);
    }
  };

  const renderItem = ({ item }) => {
    const price = typeof item.valor === "number" ? item.valor : 0;

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />

        <View style={{ marginLeft: 10 }}>
          <Text>{item.name}</Text>
          <Text>{`R$ ${price.toFixed(2)}`}</Text>

          <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
            <Text style={{ color: "red" }}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Renderiza a imagem se não houver favoritos
  if (favorites.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/image/imgfav.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
