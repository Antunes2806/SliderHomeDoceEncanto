import { useState } from "react";
import { MainApp } from "./src/Components/Onboarding";

// Importa a página de animação inicial
import Animacao from "./src/pages/Animacao";

export default function App() {
  const [start, setStart] = useState(false);

  return <>{start ? <MainApp /> : <Animacao setStart={setStart} />}</>;
}
