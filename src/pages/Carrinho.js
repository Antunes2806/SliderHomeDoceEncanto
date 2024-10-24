import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Modal,
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
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler"; // Importação

const CarrinhoScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

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
    return (total + 5).toFixed(2);
  };

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  const renderRightActions = (item) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height:100,
          borderRadius: 8,
          top:55,
        }}
        onPress={() => dispatch(removeFromCart(item))} // Remove o item ao arrastar
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Excluir</Text>
      </TouchableOpacity>
    );
  };

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
            style={{ marginBottom: 54 }}
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Swipeable
                renderRightActions={() => renderRightActions(item)} // Função de exclusão ao arrastar
              >
                <View
                  style={{
                    padding: 30,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginBottom: 10, // Fundo do item
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
                    <Text style={{ fontSize: 20, fontFamily: "League" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
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
                            fontSize: 30,
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
                            fontSize: 25,
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
                      width: 100,
                      height: 100,
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
                        width: 90,
                        height: 90,
                        borderRadius: 8,
                      }}
                      source={item.image}
                    />
                  </View>
                </View>
              </Swipeable>
            )}
          />
           <View
            style={{
              bottom: 60,
              width: "100%",
              height: "10%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "70%",
                height: "90%",
                borderRadius: 50,
                backgroundColor: "#ed8e8e",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  TAXA DE ENTREGA: R$ 5,00
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <AntDesign name="exclamationcircle" size={12} color="pink" />
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  TOTAL: R$ {calcularTotal()}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ bottom: 30, alignItems: "flex-end", right: 25 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CarrinhoFN")}
              style={{ width: "40%" }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
              >
                CONTINUAR <AntDesign name="right" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View
                style={{
                  width: 300,
                  padding: 20,
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  A taxa de entrega é aplicada para garantir o envio eficiente
                  dos seus produtos. Na nossa loja esse valor é fixo!
                </Text>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    backgroundColor: "#ed8e8e",
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Fechar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default CarrinhoScreen;