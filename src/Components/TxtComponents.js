import { Text } from "react-native";

export default function TxtComponent({ styletxt, txt, fontFamily }) {
  return <Text style={[styletxt, {fontFamily}]}>{txt}</Text>;
}
