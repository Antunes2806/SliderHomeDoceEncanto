import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/Styles";
import { firestore } from "../services/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; // Firestore imports

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Função para buscar os favoritos no Firestore
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
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    fetchFavorites(); // Carrega os favoritos ao iniciar a tela
  }, []);

  const handleRemoveFavorite = async (id) => {
    try {
      const favoriteRef = doc(firestore, "favorites", id); // Referência ao documento do Firestore
      await deleteDoc(favoriteRef);
      console.log("Produto removido dos favoritos");
      fetchFavorites(); // Atualiza a lista após remoção
    } catch (error) {
      console.error("Erro ao remover favorito: ", error);
    }
  };

  const renderItem = ({ item }) => {
    // Verifica se o valor é um número, caso contrário define como 0
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
          {/* Exibe o preço formatado */}
          <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
            <Text style={{ color: "red" }}>Remover</Text>
            {/* Botão para remover */}
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

  return (
    <ImageBackground
      style={styles.fundofv}
      source={require("../assets/image/fundofv.jpg")}
      blurRadius={9}
    >
      <View>
        <Text>Meus Favoritos</Text>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false} // Adicionado
        />
      </View>
    </ImageBackground>
  );
}
