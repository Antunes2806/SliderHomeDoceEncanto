import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RoutesTab from "../routes/RotaTab";
import { View } from "react-native";
import { styles } from "../styles/Styles";
import TxtComponent from "../Components/TxtComponents";

const Tab = createBottomTabNavigator();

export default function Produtos() {
  return (
    <View style={styles.container}>
      <TxtComponent txt="Pagina sobre" />

      <NavigationContainer>
        <RoutesTab />
      </NavigationContainer>
    </View>
  );
}
