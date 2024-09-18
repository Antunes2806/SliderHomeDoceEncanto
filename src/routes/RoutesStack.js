import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../Components/Details";
import Produtos from "../pages/Produtos";
import DonutsMorango from "../Produtos/DonutsMorango";
import DonutsChocolate from "../Produtos/DonutsChocolate";
import DonutsPacoca from "../Produtos/DonutsPacoca";
import SorveteCookies from "../Produtos/SorveteCookies";
import SorveteMorango from "../Produtos/SorveteMorango";
import SorvetePistache from "../Produtos/SorvetePistache";
import CupcakeDocedeLeite from "../Produtos/CupcakeDocedeLeite";
import CupcakeMorango from "../Produtos/CupcakeMorango";
import CupcakeChocolate from "../Produtos/CupcakeChocolate";

const Stack = createNativeStackNavigator();

export default function RoutesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsMorango"
        component={DonutsMorango}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsChocolate"
        component={DonutsChocolate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DonutsPacoca"
        component={DonutsPacoca}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorveteCookies"
        component={SorveteCookies}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorveteMorango"
        component={SorveteMorango}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SorvetePistache"
        component={SorvetePistache}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeMorango"
        component={CupcakeMorango}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CupcakeChocolate"
        component={CupcakeChocolate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CupcakeDocedeLeite"
        component={CupcakeDocedeLeite}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
