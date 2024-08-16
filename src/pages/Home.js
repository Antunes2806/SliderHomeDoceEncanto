import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

import React, { useState } from "react";
import TxtComponent from "../Components/TxtComponents";

import { styles } from "../styles/Styles";
import { Carousel } from "../Components";
import Produtos from "./Produtos";

export default function Home() {

  const [visible, setVisible] = useState(false); 
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imglogo}
          source={require("../assets/image/4.png")}
        />
        <Image
          style={styles.imglogoescrita}
          source={require("../assets/image/5.png")}
        />
      </View>
      <View style={styles.viewtotal}>
        <View style={styles.test}>
          <Image
            style={styles.imghome}
            source={require("../assets/image/donutspghome.png")}
          />
        </View>
        <View style={styles.testing}>
          <TouchableOpacity
            style={{ backgroundColor: "red" }}
            onPress={() => visModal(true)}
          >
            <TxtComponent txt="botao" />
          </TouchableOpacity>
          <Modal animationType="fade" visible={visible}>
            <Produtos />
          </Modal>
        </View>
      </View>
    </View>
  );
}
