import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign';

import TxtComponent from '../Components/TxtComponents';

import { styles } from '../styles/Styles';
import { Carousel } from '../Components';

export default function Home() {
  const [font] = useFonts ({
    Great_Vibes: require("../fontes/Great_Vibes/GreatVibes-Regular.ttf"),
  });

   if (!font) {
    return null;
   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <TxtComponent styletxt={styles.txtname} txt="Doce Encanto" fontFamily="Great_Vibes"/>
        <View style={styles.favoritos}>
        <AntDesign name="hearto" size={24} color="#4d2929" />
        </View>
              
      </View>
      <View style={styles.carrosel}>
      <Carousel />
      </View>
      
    </View>
  );
}


