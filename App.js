import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import RoutesTab from "./src/routes/RoutesTab";
import { View } from "react-native";
import { useState } from "react";

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {start ? (
        <View style={{ flex: 1 }}>
          <RoutesTab />
        </View>
      ) : (
        <Home setStart={setStart} />
      )}
    </>
  );
}
