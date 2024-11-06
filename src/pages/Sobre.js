import {
  Text,
  View,
  ScrollView,
  styles,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { stylesSobre } from "../styles/StylesSobre";

import { useFonts } from "expo-font";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Linking } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


import { useIsFocused } from "@react-navigation/native";
export default function Sobre() {
  //Fontes
  const [font] = useFonts({
    League_Spartan: require("../fontes/League_Spartan/static/LeagueSpartan-Bold.ttf"),
    Nunito: require("../fontes/Nunito/static/Nunito-SemiBold.ttf"),
  });

  if (!font) {
    return null;
  }
//link do endereço e do insta
  const handleAddressPress = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.google.com/maps?q=SESI+436");
  };
  const insta = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.instagram.com/sesisp/");
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={stylesSobre.ImgFundo}
      source={require("../assets/image/imagemfdsb.png")}
    >
      
      <View style={stylesSobre.container}>
        <View style={stylesSobre.Viewtexto}>
          <Text style={stylesSobre.txtsobre}> SOBRE NÓS </Text>
          <Text style={stylesSobre.txtsubtitulo}> Doce Encanto </Text>
          <View style={stylesSobre.linha}></View>
          <Text style={stylesSobre.txt}>
            A Doce Encanto é uma doceria criada por quatro amigos apaixonados
            por confeitaria. Unindo talentos únicos, eles oferecem uma seleção
            de doces artesanais, como bolos, cupcakes, cookies,
            destacando-se pela qualidade dos ingredientes e atenção aos
            detalhes. O espírito colaborativo e a paixão pela gastronomia fazem
            da Doce Encanto um lugar especial, onde cada doce é feito com
            carinho, proporcionando uma experiência única para seus clientes.
          </Text>
          {/* asegunda linha */}
          <View style={stylesSobre.linha2}></View>
          {/* View "pai" das formas de contato*/}
          <View style={stylesSobre.Viewcontato}>
            {/* View do insta*/}
              <View style={stylesSobre.Viewinsta}>
              <SimpleLineIcons name="social-instagram" size={24} color="black" />
                <TouchableOpacity onPress={insta}>
               <Text style={stylesSobre.txtendereco}> Doce_Encanto</Text>
                </TouchableOpacity>
            </View>
             {/* View da localização*/}
            <View style={stylesSobre.Viewlocalizacao}>
                <EvilIcons name="location" size={35} color="black" />
                 <TouchableOpacity onPress={handleAddressPress}>
                 <Text style={stylesSobre.txtendereco}>
                 Endereço
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
