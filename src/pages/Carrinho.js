import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../CartReducer";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const CarrinhoScreen = () => {
  const navigation = useNavigation(); // Hook para navegação
  const cart = useSelector((state) => state.cart.cart); // Obtém o estado do carrinho
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const calcularTotal = () => {
    return cart
      .reduce((total, item) => {
        const valorNumerico = parseFloat(item.valor.replace(",", "."));
        return total + valorNumerico * item.quantity; // Multiplica pelo quantity
      }, 0)
      .toFixed(2); // Retorna o total formatado para 2 casas decimais
  };

  return (
    <View style={{ flex: 1 }}>
      {cart.length > 0 && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Carrinho
        </Text>
      )}
      {/* Verifica se o carrinho está vazio */}
      {cart.length === 0 ? (
        <ImageBackground
          style={{ width: "100%", height: "100%", flex: 1 }}
          source={require("../assets/image/fundocar1.png")}
          resizeMode="cover"
        ></ImageBackground>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Exibe a imagem do produto */}
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 30,
                  marginLeft: 10,
                  backgroundColor: "#ed8e8e",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                  }}
                  source={item.image} // Usando a imagem do item
                />
              </View>

              {/* Exibe o valor do produto */}
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Preço: R$ {item.valor}
                </Text>
              </View>
            </View>
          )}
          // Componente para exibir o total no final da lista
          ListFooterComponent={
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#ed8e8e",
                  borderRadius: 80,
                  marginTop: 15,
                  height: "30%",
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Total: R$ {calcularTotal()}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  height: 90,
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Finalizarpdd")}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold", right: 10 }}>
                    FINALIZAR PEDIDO
                    <AntDesign name="right" size={20} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      )}
    </View>
  );
};

export default CarrinhoScreen;
