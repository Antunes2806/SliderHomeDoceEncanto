import { Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

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
        <ImageBackground
        style={styles.imgfundo}
        source={require("../assets/image/ImageFundo.png")}>
        <TxtComponent styletxt={styles.txtname} txt="Doce Encanto"/>
        <Carousel />
        </ImageBackground>
    </View>
  );
}


