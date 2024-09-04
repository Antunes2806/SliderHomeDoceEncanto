import { Text, Image, View, ScrollView, styles } from "react-native";
import { useFonts } from "expo-font";

import { stylesSobre } from "../styles/StylesSobre";

export default function Sobre() {
  const [font] = useFonts({
    Montserrat: require("../fontes/Montserrat/Montserrat/static/Montserrat-SemiBoldItalic.ttf"),
    Rokkitt: require("../fontes/Rokkit/Rokkitt/static/Rokkitt-LightItalic.ttf"),
  });

  if (!font) {
    return null;
  }
  return (
    <View style={stylesSobre.container}>
      <View style={stylesSobre.header}>
        <Image
          style={stylesSobre.logo}
          source={require("../assets/image/doceencanto.png")}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={stylesSobre.cards}>
          <View style={stylesSobre.card}>
            <Image
              style={stylesSobre.imgcupcake}
              source={require("../assets/image/cupcake.png")}
            />
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Cupcake</Text>
              <Text style={stylesSobre.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={stylesSobre.card}>
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Donuts</Text>
              <Text style={stylesSobre.sobre}>
                Nossos donuts, com suas massas macias e coberturas coloridas,
                são um verdadeiro deleite que conquista paladares ao redor do
                mundo.
              </Text>
            </View>
            <Image
              style={stylesSobre.imgdonuts}
              source={require("../assets/image/donuts.png")}
            />
          </View>
          <View style={stylesSobre.card}>
            <Image
              style={stylesSobre.imgcookie}
              source={require("../assets/image/cookies.png")}
            />
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Cookie</Text>
              <Text style={stylesSobre.sobre}>
                Nossos cookies são pequenos biscoitos que conquistam paladares
                pelo mundo todo. Crocantes por fora e macios por dentro, eles
                vêm em diversas variedades.
              </Text>
            </View>
          </View>
          <View style={stylesSobre.card}>
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Sorvete</Text>
              <Text style={stylesSobre.sobre}>
                Nossos sorvetes são uma das sobremesas mais apreciadas em todo o
                mundo. Além de delicioso, o sorvete também é versátil, podendo
                ser servido em casquinhas, taças, ou como parte de sobremesas
                elaboradas.
              </Text>
            </View>
            <Image
              style={stylesSobre.imgsorvete}
              source={require("../assets/image/sorvete1.png")}
            />
          </View>
          <View style={stylesSobre.card}>
            <Image
              style={stylesSobre.imgbrownie}
              source={require("../assets/image/brownie.png")}
            />
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Brownie</Text>
              <Text style={stylesSobre.sobre}>
                Nossos brownies são deliciosos bolinhos de chocolate, conhecidos
                por sua textura densa e úmida, com uma casquinha crocante por
                fora. Eles combinam a intensidade do chocolate com a doçura
                perfeita.
              </Text>
            </View>
          </View>
          <View style={stylesSobre.card}>
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Bolo</Text>
              <Text style={stylesSobre.sobre}>
                Nossos bolos são uma deliciosa obra de arte comestível que
                combina simplicidade e sabor em camadas macias e úmidas. Seja
                para uma celebração ou um momento de puro prazer, o bolo sempre
                tem o poder de trazer sorrisos e reunir pessoas.
              </Text>
            </View>
            <Image
              style={stylesSobre.imgbolo}
              source={require("../assets/image/bolo.png")}
            />
          </View>
        </View>
      </ScrollView>

      <View style={stylesSobre.footer}></View>
    </View>
  );
}
