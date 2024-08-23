import { Text, Image, View, ScrollView, styles } from "react-native";
import { useFonts } from "expo-font";

import { stylesSobre } from "../styles/StylesSobre";

export default function Sobre() {
  const [font] = useFonts({
    Nixie_One: require("../fontes/Nixie_One/NixieOne-Regular.ttf"),
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
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
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
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={stylesSobre.card}>
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Sorvete</Text>
              <Text style={stylesSobre.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
            <Image
              style={stylesSobre.imgsorvete}
              source={require("../assets/image/sorvete.png")}
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
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
              </Text>
            </View>
          </View>
          <View style={stylesSobre.card}>
            <View style={stylesSobre.textsCard}>
              <Text style={stylesSobre.titulo}>Bolo</Text>
              <Text style={stylesSobre.sobre}>
                Nossos cupcakes são obras de arte culinária que encantam o
                paladar. Feitos com muito amor para você.
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
