import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";

import React, { useState } from "react";
import TxtComponent from "../Components/TxtComponents";

import { styles } from "../styles/Styles";
import Produtos from "./Produtos";

export default function Home({ setStart }) {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewLogoEscrita}>
          <Image
            style={styles.imgEscrita}
            source={require("../assets/image/5.png")}
          />
        </View>
        <View style={styles.viewLogo}>
          <Image
            style={styles.imgLogo}
            source={require("../assets/image/4.png")}
          />
        </View>
      </View>
      <View style={styles.teste}>
        <View style={styles.circulo}>
          <View style={styles.viewImgDnt}>
            <Image
              style={styles.imgdnt}
              source={require("../assets/image/imgpgbemvindo.png")}
            />
          </View>
          <View
            style={
              styles.viewBtnModal
            }
          >
            <TouchableOpacity style={styles.btn} onPress={() => setStart(true)}>
              <TxtComponent txt="botao" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
