import {
    StyleSheet,
    View,
    useWindowDimensions,
    Text,
    ImageBackground,
  } from "react-native";
  
  export default OnboardingItem = ({ item, onPress, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
      <View style={[styles.container, { width }]}>
        <ImageBackground
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        ></ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });