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

import { NavigationContainer } from "@react-navigation/native";
import RoutesTab from "../routes/Index";
import RoutesDrawer from "../routes/Index";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startHome, setStartHome] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  const handlePress = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      setStartHome(true);
    }
  };

  return (
    <>
      {startHome ? (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <RoutesDrawer />
          </NavigationContainer>
        </View>
      ) : (
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
              <ButtonComponent onPress={handlePress} />
            </View>
          </View>
        </View>
      )}
    </>
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
