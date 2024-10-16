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
import { useFonts } from "expo-font";

const CarrinhoScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
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
    const total = cart.reduce((total, item) => {
      const valorNumerico = parseFloat(item.valor.replace(",", "."));
      return total + valorNumerico * item.quantity;
    }, 0);
    return (total + 5).toFixed(2); // Adiciona a taxa de entrega de R$ 5,00
  };

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f3f3" }}>
      {cart.length > 0 && (
        <View
          style={{
            width: "100%",
            height: "10%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "League",
              textAlign: "center",
            }}
          >
            MEU CARRINHO
          </Text>
        </View>
      )}

      {cart.length === 0 ? (
        <ImageBackground
          style={{ width: "100%", height: "100%", flex: 1 }}
          source={require("../assets/image/fundocar1.png")}
          resizeMode="cover"
        ></ImageBackground>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  justifyContent: "center", // Centraliza horizontalmente
                  alignItems: "center", // Centraliza verticalmente
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: 120,
                    top: 30,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Text style={{ fontSize: 25, fontFamily: "League" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "League",
                      marginTop: 10,
                    }}
                  >
                    Valor: R$ {item.valor}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#ed8e8e",
                      borderRadius: 15,
                      width: 140,
                      height: 30,
                      position: "absolute",
                      bottom: 10,
                      left: "20%",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Pressable onPress={() => decreaseQuantity(item)}>
                      <Text
                        style={{
                          fontSize: 25,
                          color: "black",
                          fontFamily: "League",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontFamily: "League",
                      }}
                    >
                      {item.quantity}
                    </Text>
                    <Pressable onPress={() => increaseQuantity(item)}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          fontFamily: "League",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 30,
                    marginLeft: 10,
                    backgroundColor: "#ed8e8e",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 20,
                  }}
                >
                  <Image
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: 8,
                    }}
                    source={item.image}
                  />
                </View>
              </View>
            )}
          />

          {/* Componente fixo no final da tela */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "30%",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: "#ed8e8e",
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontFamily:"League", }}>
              Taxa de entrega: R$ 5,00
            </Text>
            </View>
            <Text
              style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
            >
              TOTAL: R$ {calcularTotal()}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CarrinhoFN")}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                CONTINUAR <AntDesign name="right" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CarrinhoScreen;
