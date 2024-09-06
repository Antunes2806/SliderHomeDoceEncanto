import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  Easing,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { stylesProdutos } from "../styles/StylesProdutos";
import TxtComponent from "../Components/TxtComponents";
import Sobre from "./Sobre";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOURS, Categorias } from "../database/items";

export default function Produtos() {
  const [currentSelected, setcurrentSelected] = useState([0]);
  //categorias

  const renderCategorias = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setcurrentSelected(index)}
      >
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "center",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ data, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          width: "100%",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={stylesProdutos.donuts}></View>
      </TouchableOpacity>
    );
  };

  const widthAnim = useRef(new Animated.Value(0)).current; // Largura inicial 0

  useEffect(() => {
    const { width } = Dimensions.get("window"); // Obtém a largura da tela

    Animated.timing(widthAnim, {
      toValue: width, // Posição final com largura total
      duration: 1500, // Duração da animação em milissegundos
      easing: Easing.out(Easing.ease), // Efeito de easing
      useNativeDriver: false, // Precisa ser false porque width não é suportado pelo native driver
    }).start(); // Corrigido para chamar start como função
  }, [widthAnim]);

  return (
    <Animated.View
      style={[
        styles.viewBtnModal,
        {
          width: widthAnim, // Largura animada da View
        },
      ]}
    >
      {/*header*/}
      <View style={stylesProdutos.headerprdt}>
        <View style={stylesProdutos.icon}>
          <Entypo name="chevron-small-left" size={28} color="black" />
        </View>
        <View style={stylesProdutos.viewtitulo}>
          <TxtComponent style={stylesProdutos.titulopd} txt="Produtos" />
        </View>
        <View style={stylesProdutos.viewLogopd}>
          <Image
            style={stylesProdutos.imgLogopd}
            source={require("../assets/image/4.png")}
          />
        </View>
      </View>
      {/* Nome e pesquisa*/}
      <View style={stylesProdutos.containerpesquisa}>
        <View style={stylesProdutos.ViewTxtNome}>
          <Text style={stylesProdutos.txtNome}>Olá, Fulano</Text>
        </View>
      </View>

      {/*View pesquisa*/}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="search"
          style={{ fontSize: 20, color: COLOURS.black, opacity: 0.8 }}
        />
        <TextInput
          placeholder="Search..."
          style={{
            color: COLOURS.black,
            fontSize: 16,
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: COLOURS.black + 20,
            width: "90%",
            marginLeft: 10,
            letterSpacing: 1,
          }}
        />
      </View>

      {/* Categorias*/}
      <View style={stylesProdutos.categorias}>
        <Text style={stylesProdutos.txtcategorias}>categorias</Text>
      </View>

      <Text
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          fontSize: 18,
          fontWeight: "700",
          color: COLOURS.black,
        }}
      >
        Produtos
      </Text>
      {Categorias[currentSelected].items.map(renderItem)}

      <FlatList
        horizontal={true}
        data={Categorias}
        renderItem={renderCategorias}
        showsHorizontalScrollIndicator={false}
      />
      {/* View dos produtos*/}
      <ScrollView>
        <View style={stylesProdutos.Viewprodutos}>
          <View style={stylesProdutos.donuts}>
            <Image
              style={stylesProdutos.imgdonutspd}
              source={require("../assets/image/donuts.png")}
            />
            <Text style={stylesProdutos.txtdonuts}>Donuts de Morango</Text>
            <TouchableOpacity
              style={stylesProdutos.btnsaibamais}
              onPress={Sobre}
            >
              <Text style={{ color: "lightpink" }}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  viewBtnModal: {
    flex: 1,
    height: "100%", // Garante que a altura da View seja 100%
    width: "100%",
    backgroundColor: "white", // Define a cor de fundo
    borderRadius: 10, // Adiciona bordas arredondadas
    overflow: "hidden", // Garante que o conteúdo não exceda os limites da View
  },
});
