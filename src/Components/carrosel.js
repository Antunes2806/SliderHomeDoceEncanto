import { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
} from "react-native-reanimated";

const DATA = [
  {
    image:
      "https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1",
    text: "aaaaaa",
  },
  {
    image:
      "https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg",
    text: "bbbbbb",
  },
  {
    image:
      "https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png",
    text: "ccccccc",
  },
];

export const Carousel = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  
  const FlatlistRef = useRef(null);   
  const onViewableItemsChanged = ({ viewableItems }) => {    
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    if (activeBanner === DATA.length - 1) {
      return;
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={FlatlistRef}  
        data={DATA}   
        renderItem={({ item, index }) => (
          <View
            style={{
              width: Dimensions.get("screen").width * 0.8,
              alignItems: "center",
              height: 180,
              borderRadius: 30,
              marginHorizontal: 90,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "50%",
                height: "50%",
                alignSelf: "center",
                borderRadius: 90,
              }}
              resizeMode="contain"
            />
          </View>
        )}
        style={{
          paddingTop: 30,
          height: 1,
        }}
        contentContainerStyle={{
          marginLeft: 13,
        }}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
