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
import { Categorias, COLOURS } from "../database/items";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function Produtos() {
  const [font] = useFonts({
    League_Spartan: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
    Nunito: require("../fontes/Nunito/static/Nunito-SemiBold.ttf"),
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  // Verifique se a fonte foi carregada
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    if (font) {
      setIsFontLoaded(true);
    }
  }, [font]);
  const [currentSelected, setcurrentSelected] = useState([0]);
  const widthAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const { width } = Dimensions.get("window");

    Animated.timing(widthAnim, {
      toValue: width,
      duration: 1500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [widthAnim]);

  const renderCategorias = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setcurrentSelected(index)}
      >
        <View
          style={{
            width: 70,
            height: 80,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.white : COLOURS.rosa,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          <View style={{ width: 100, height: 100 }}>
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "center",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
          marginTop: 50,
        }}
      >
        <View style={stylesProdutos.donuts}>
          <View style={{ width: 150, height: 150 }}>
            <Image
              source={data.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              display: data.isTopOfTheWeek ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>{data.name}</Text>
            <TouchableOpacity
              style={stylesProdutos.btnsaibamais}
              onPress={() => navigation.navigate(data.routeName)} // Navegar para a rota específica
            >
              <Text style={{ color: "lightpink" }}>Saiba Mais</Text>
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
            marginBottom: 200,
          },
        ]}
      >
        {/*header*/}
        {/* Nome e pesquisa*/}
        <View style={stylesProdutos.ViewTxtNome}>
          <Text style={stylesProdutos.txtNome}>Olá, Fulano</Text>
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
            <Text style={stylesProdutos.txtcategorias}>categoria</Text>
            <FlatList
              horizontal={true}
              data={Categorias}
              renderItem={renderCategorias}
              showsHorizontalScrollIndicator={false}
            />
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

          {Categorias[currentSelected] &&
            Categorias[currentSelected].items.map(renderItem)}
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
