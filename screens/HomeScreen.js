import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../CartReducer";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook para navegação
  const cart = useSelector((state) => state.cart.cart); // Obtém o estado do carrinho
  const dispatch = useDispatch();

  const images = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
      name: "icecream",
      valor: "15,00",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
      name: "biscuit",
      valor: "20,00",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
      name: "chocolate",
      valor: "50,00",
    },
  ];

  // Função para adicionar um item ao carrinho
  const addItemToCart = (item) => {
    dispatch(addToCart(item)); // Dispara a ação para adicionar o item ao carrinho
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Sistema de Carrinho com Redux
      </Text>

      {/* Lista de produtos */}
      {images.map((item) => (
        <Pressable
          key={item.id}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ margin: 10 }}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 8 }}
              source={{ uri: item.image }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ marginTop: 5 }}>Preço: R$ {item.valor}</Text>
            {cart.some((cartItem) => cartItem.id === item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}
                >
                  REMOVER DO CARRINHO
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)}>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}
                >
                  ADICIONAR AO CARRINHO
                </Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default HomeScreen;
