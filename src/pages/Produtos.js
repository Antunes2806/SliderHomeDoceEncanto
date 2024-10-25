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
import Ionicons from "@expo/vector-icons/Ionicons";
import { Categorias, COLOURS } from "../database/items";
import { useNavigation } from "@react-navigation/native";
import { stylesProdutos } from "../styles/StylesProdutos";

import AntDesign from "@expo/vector-icons/AntDesign";

import { useFonts } from "expo-font";

export default function Produtos() {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para a pesquisa
  const [filteredItems, setFilteredItems] = useState([]); // Estado para os itens filtrados
  const [currentSelected, setcurrentSelected] = useState(0); // Estado para a categoria selecionada
  const widthAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const { width } = Dimensions.get("window");

    // Animação da largura
    Animated.timing(widthAnim, {
      toValue: width,
      duration: 1500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, // Não use o driver nativo para estilos não suportados
    }).start();
  }, [widthAnim]);

  const [font] = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
    League: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
  });

  if (!font) {
    return null;
  }

  // Função para lidar com a pesquisa
  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text === "") {
      setFilteredItems([]); // Limpa a pesquisa e exibe os itens normais
    } else {
      // Filtra os itens em todas as categorias
      const filtered = Categorias.reduce((acc, categoria) => {
        const matchedItems = categoria.items.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        return [...acc, ...matchedItems]; // Adiciona os itens filtrados
      }, []);

      setFilteredItems(filtered); // Atualiza os itens filtrados
    }
  };

  // Renderiza as categorias
  const renderCategorias = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setcurrentSelected(index)}
      >
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.white : COLOURS.rosa,
            borderRadius: 20,
            margin: 10,
            elevation: 5, // Elevação para Android
            shadowColor: "#000", // Sombra para iOS
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  // Renderiza os itens (todos ou filtrados)
  const renderItem = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: "100%",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginVertical: 20,
        }}
      >
        <View
          style={[
            stylesProdutos.donuts,
            {
              elevation: 5, // Elevação para Android
              shadowColor: "#000", // Sombra para iOS
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              flexDirection: "row", // Exibe imagem e texto lado a lado
              justifyContent: "center", // Centraliza os itens horizontalmente
              alignItems: "center", // Centraliza verticalmente
            },
          ]}
        >
          <View
            style={{
              width: 200,
              height: 350,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={data.image}
              style={{
                width: 500,
                height: "100%",
                resizeMode: "contain",
                marginLeft: 60,
              }}
            />
          </View>

          <View
            style={{
              width: 250,
              alignItems: "flex-start", // Alinha o texto à esquerda
              justifyContent: "space-between", // Distribui o texto e o botão
            }}
          >
            <View
              style={{
                marginBottom: 50,
                alignSelf: "flex-end", // Move o texto para a direita
                marginRight: 110, // Distância da borda direita
              }}
            >
              <Text
                style={{
                  fontSize: 25, // Tamanho do texto ajustado
                  fontWeight: "bold", // Deixa o texto mais destacado
                  color: "#FFFFFF", // Cor da fonte
                  textAlign: "center", // Centraliza o texto
                  fontFamily: "Rokkitt", // Fonte personalizada
                }}
              >
                {data.name}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                alignSelf: "flex-end", // Move o botão para o canto direito
                marginBottom: 10, // Posição na parte inferior
                marginRight: 120, // Distância da borda direita
                marginTop: 60,
              }}
              onPress={() => navigation.navigate(data.routeName)}
            >
              <AntDesign name="pluscircle" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.viewBtnModal,
          {
            width: widthAnim,
            marginBottom: 70,
          },
        ]}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
            top: 20,
          }}
        >
          <Text style={stylesProdutos.txtNome}>Olá, Fulano</Text>
          <Image
            style={{ height: 90, width: 90, top: 20 }} // Ajuste conforme necessário
            source={require("../assets/image/4.png")}
          />
        </View>

        <View style={stylesProdutos.ViewTxtNome}>
          <View
            style={{
              top: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#ed8e8e",
                borderRadius: 9,
                height: 25,
                width: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="search"
                style={{ fontSize: 20, color: COLOURS.black, opacity: 0.8 }}
              />
            </View>
            <TextInput
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChangeText={handleSearch}
              style={{
                color: COLOURS.black,
                fontSize: 18, // Tamanho da fonte
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black + 20,
                width: "80%",
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <View style={stylesProdutos.categorias}>
            <Text style={stylesProdutos.txtcategorias}>Categorias</Text>
            <FlatList
              horizontal={true}
              data={Categorias}
              renderItem={renderCategorias}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text
            style={{
              paddingTop: 30,
              paddingHorizontal: 20,
              fontSize: 25,
              fontWeight: "700",
              color: COLOURS.black,
              fontFamily: "Rokkitt", // Fonte personalizada
            }}
          >
            Produtos
          </Text>

          {filteredItems.length > 0
            ? filteredItems.map(renderItem)
            : Categorias[currentSelected]?.items.map(renderItem)}
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBtnModal: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});
