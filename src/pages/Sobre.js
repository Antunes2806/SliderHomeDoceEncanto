import { Text, Image, View, ScrollView, styles } from "react-native";

import { stylesSobre } from "../styles/StylesSobre";

import { useFonts } from "expo-font";

export default function Sobre() {
  const { font } = useFonts({
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={stylesSobre.container}>
      <View style={stylesSobre.Viewtexto}>
        <Text style={stylesSobre.txtsobre}> Sobre Nós </Text>
        <Text style={stylesSobre.txtsubtitulo}> Doce Encanto </Text>
        <View style={stylesSobre.linha}></View>
        <Text style={stylesSobre.txt}>
          A Doce Encanto é uma doceria criada por quatro amigos apaixonados por
          confeitaria. Unindo talentos únicos, eles oferecem uma seleção de
          doces artesanais, como bolos, cupcakes e brigadeiros gourmet,
          destacando-se pela qualidade dos ingredientes e atenção aos detalhes.
          O espírito colaborativo e a paixão pela gastronomia fazem da Doce
          Encanto um lugar especial, onde cada doce é feito com carinho,
          proporcionando uma experiência única para seus clientes.
        </Text>
      </View>
    </View>
  );
}
