import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "../styles/Styles";
import Entypo from "@expo/vector-icons/Entypo";
import { CircularCarousel } from "../Components/circular-carousel";

const data = [
  require("../assets/image/donutspghome.png"),
  require("../assets/image/imgpgbemvindo.png"),
  require("../assets/image/4.png"),
  require("../assets/image/5.png"),
  require("../assets/image/doceencanto.png"),
  require("../assets/image/fundofv.jpg"),
];

export default function Favoritos() {
  return (
    <ImageBackground
      style={styles.fundofv}
      source={require("../assets/image/fundofv.jpg")}
      blurRadius={9}
    >
      <CircularCarousel data={data} />
      <View style={styles.containerfavoritos}>
        <View style={styles.headerfv}>
          <View style={styles.viewIconfv}>
            <Entypo name="chevron-small-left" size={28} color="black" />
          </View>
          <View style={styles.viewTitulofv}>
            <Text style={styles.titulofv}> Seus Favoritos</Text>
          </View>
          <View style={styles.viewLogofv}>
            <Image
              style={styles.imgLogofv}
              source={require("../assets/image/4.png")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
