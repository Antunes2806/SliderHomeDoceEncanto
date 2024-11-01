import { View } from "react-native";
import { useState } from "react";
import { Onboarding, MainApp } from "./src/Components/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import RoutesTab from "./src/routes/Index";

// Importa a página de animação inicial
import Animacao from "./src/pages/Animacao";

export default function App() {
  const [start, setStart] = useState(false);

  return <>{start ? <MainApp /> : <Animacao setStart={setStart} />}</>;
}
