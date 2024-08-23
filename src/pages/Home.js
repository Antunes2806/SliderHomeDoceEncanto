import {
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { styles } from "../styles/Styles";
//Import de components
import TxtComponent from "../Components/TxtComponents";

//Import Vector Icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
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
          <View style={styles.viewBtnModal}>
            <TouchableOpacity style={styles.btn} onPress={() => setStart(true)}>
       
                <TxtComponent txt="Próximo" styletxt={styles.proxtxt} />
                <FontAwesome6 name="arrow-right-long" size={30} color="white" />
             
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
