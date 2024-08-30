import React, { useEffect, useRef } from "react";
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
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { stylesProdutos } from "../styles/StylesProdutos";
import TxtComponent from "../Components/TxtComponents";
import Sobre from "./Sobre";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Produtos() {
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
      {/* Categorias*/}
      <View style={stylesProdutos.categorias}>
        <Text style={stylesProdutos.txtcategorias}>categorias</Text>
      </View>
      <ScrollView>
        <View style={stylesProdutos.Viewprodutos}>
          <View style={stylesProdutos.donuts}>
            <Text style={stylesProdutos.txtdonuts}>Donuts</Text>
            <TouchableOpacity
              style={stylesProdutos.btnsaibamais}
              onPress={Sobre}
            >
              <Text>Saiba Mais</Text>
            </TouchableOpacity>
            <View style={stylesProdutos.ViewDonuts}>
              <Image
                style={stylesProdutos.donutspd}
                source={require("../assets/image/donuts.png")}
              />
            </View>
            <TouchableOpacity
              style={stylesProdutos.btncarrinho}
              onPress={Sobre}
            >
              <Text>adicionar</Text>
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
    backgroundColor: "#f6c8e0", // Define a cor de fundo
    borderRadius: 10, // Adiciona bordas arredondadas
    overflow: "hidden", // Garante que o conteúdo não exceda os limites da View
  },
});
