import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  BackHandler,
} from "react-native";
import Slides from "../../Slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import ButtonComponent from "./ButtonComponent";
export default function Onboarding({ setStart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // Impede que o botão "voltar" funcione na tela de onboarding
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => (
            <OnboardingItem item={item} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <View style={styles.paginatorContainer}>
          <Paginator data={Slides} scrollX={scrollX} />
          <ButtonComponent setStart={setStart} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  paginatorContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
