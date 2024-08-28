import { Dimensions, ImageProps, Image, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type CircularCarouselListItemProps = {
  imageSrc: ImageProps["source"];
  index: number;
  contentOffset: Animated.SharedValue<number>;
};

const { width: windowWidth } = Dimensions.get("window");

export const ListItemWidth = windowWidth / 4;

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({
  imageSrc,
  index,
  contentOffset,
  textSrc,
}) => {
  alert(textSrc);
  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ListItemWidth,
      (index - 1) * ListItemWidth,
      index * ListItemWidth,
      (index + 1) * ListItemWidth,
      (index + 2) * ListItemWidth,
    ];

    // Aumentando a amplitude da rotação vertical
    const translateYOutputRange = [
      0,
      ListItemWidth,
      ListItemWidth * 1.5,
      ListItemWidth,
      0,
    ];

    const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          translateY: translateY,
        },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ListItemWidth,
          aspectRatio: 1,
          elevation: 10,
          shadowOpacity: 3,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}
    >
      <Image
        source={imageSrc}
        style={{
          height: ListItemWidth,
          width: ListItemWidth,
          borderRadius: 200,
        }}
      />
      <Text>{textSrc}</Text>
    </Animated.View>
  );
};

export { CircularCarouselListItem };
